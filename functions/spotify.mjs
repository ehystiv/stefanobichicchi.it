import fetch from "node-fetch";
import { config } from "dotenv";
config();

exports.handler = async (event, context) => {
  // Get the refresh token we stored as an environment variable
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  // Do the base64 encoding we did earlier but with Node tools
  const auth = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  // Store the Spotify API endpoint for readability
  const tokenEndpoint = `https://accounts.spotify.com/api/token`;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=refresh_token&refresh_token=${refreshToken}&redirect_uri=${encodeURI(
      process.env.URL,
      +"/.netlify/functions/callback"
    )}`,
  };

  const playerEndpoint = `https://api.spotify.com/v1/me/player/recently-played`;

  const accessToken = await fetch(tokenEndpoint, options)
    .then((res) => res.json())
    .then((json) => {
      return json.access_token;
    })
    .catch((err) => {
      console.err(err);
    });

  return fetch(`${playerEndpoint}?limit=5`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then(({ items }) => {
      const results = [];
      // Let's do a little more destructuring assignment to take only what we need from the response
      items.forEach((element) => {
        const {
          artists: artistsArray,
          name,
          external_urls: urls,
          album,
        } = element.track;

        // We want to keep the array of artists in case there's a track feature, etc.
        const simplifiedArtists = artistsArray.map((artist) => ({
          name: artist.name,
          url: artist.href,
        }));

        // Lastly, make the url/artwork references more specific
        const trackUrl = urls.spotify;
        const artworkUrl = album.images[1].url;

        results.push({
          artists: simplifiedArtists,
          name,
          trackUrl,
          artworkUrl,
        });
      });

      // And then return a stringified object that contains all the data we want to render!
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(results),
      };
    });
};
