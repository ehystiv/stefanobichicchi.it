<script setup>
  import { useStore } from "./stores/spotify";
  import NavBar from "./components/NavBar.vue";
  import ReadMe from "./components/ReadMe.vue";
  import LastSongs from "./components/LastSongs.vue";

  const store = useStore();

  fetch("/api/spotify").then(async (response) => {
    if (response.status != 200) {
      throw response.status;
    } else {
      let result = await response.json();
      store.lastSongs = result;
    }
  });
</script>

<template>
  <NavBar />
  <ReadMe />
  <LastSongs />
</template>

<style lang="scss">
  @import "./assets/style/main.scss";
</style>
