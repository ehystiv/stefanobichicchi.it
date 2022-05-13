<script setup>
  import { useStore } from "./stores/spotify";
  import NavBar from "./components/NavBar.vue";
  import ReadMe from "./components/ReadMe.vue";
  import Works from "./components/Works.vue";
  import LastSongs from "./components/LastSongs.vue";
  import LanguageAndTechnologies from "./components/LanguageAndTechnologies.vue";

  const store = useStore();

  function updateSongs() {
    fetch("/api/spotify").then(async (response) => {
      if (response.status != 200) {
        throw response.status;
      } else {
        let result = await response.json();
        store.lasts = result;
        store.lastSong = result[0];
      }
    });
  }

  updateSongs();

  setInterval(updateSongs, 10 * 60 * 1000);
</script>

<template>
  <NavBar />
  <ReadMe />
  <Works />
  <LastSongs />
  <LanguageAndTechnologies />
</template>

<style lang="scss">
  @import "./assets/style/main.scss";
</style>
