<script>
  import { BrandSpotifyIcon } from "vue-tabler-icons";
  import { useStore } from "../stores/spotify";

  export default {
    name: "NavBar",

    components: {
      BrandSpotifyIcon,
    },

    data: () => ({
      title: "Stefano Bichicchi - Sviluppatore Web",
      writedTitle: "",
      speed: 110,
      i: 0,
      lastSpotifySong: null,
      showSpotify: false,
      store: null,
    }),

    methods: {
      writeTitle() {
        if (this.writedTitle.length < this.title.length) {
          this.writedTitle += this.title[this.i];
          this.i++;
          setTimeout(this.writeTitle, this.speed);
        } else {
          this.showSpotify = true;
        }
      },
    },

    created() {
      this.writeTitle();
      this.store = useStore();
      this.lastSpotifySong = this.store.lastSongs[0];
    },
  };
</script>

<template>
  <nav id="main-navbar">
    <div class="nav-container">
      <div class="title">
        <h1 class="name">{{ writedTitle }}<span class="underscore">_</span></h1>
      </div>
      <div>
        <div v-if="showSpotify" class="current-song">
          Ultima riproduzione: <a :href="lastSpotifySong?.trackUrl">{{ lastSpotifySong?.name || "Nessuna canzone" }}</a>
          <span><BrandSpotifyIcon size="25" stroke-width="1" /></span>
        </div>
      </div>
      <div>
        <button class="btn">ita</button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import "../assets/style/partials/_variables.scss";
  @import "../assets/style/partials/_mixins.scss";

  #main-navbar {
    .nav-container {
      padding: 0.8rem 2rem;
      min-height: 8vh;

      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3rem;

      .title {
        width: 25%;
        .name,
        .underscore {
          font-weight: 400;
          font-size: 1.1rem;
        }

        .underscore {
          animation: fade 1.5s linear infinite;
        }
      }

      .current-song {
        display: flex;
        align-items: center;

        font-size: 0.9rem;

        a {
          white-space: nowrap;
          display: inline-block;
          margin-inline: 10px;
          color: black;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .btn {
        border: none;

        padding: 0.2rem 0.5rem;

        background-color: transparent;

        font-size: 1rem;
        text-transform: uppercase;

        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @include mobile {
    #main-navbar {
      .nav-container {
        .title {
          width: unset;
        }

        .current-song {
          display: none;
        }
      }
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
