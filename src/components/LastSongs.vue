<script setup>
  import { storeToRefs } from "pinia";
  import { useStore } from "../stores/spotify";
  import { PlayerSkipForwardIcon } from "vue-tabler-icons";
  import SpotifySong from "@/SpotifySong.vue";

  const store = useStore();

  const { lasts } = storeToRefs(store);
</script>

<template>
  <section id="last-songs">
    <div class="box-container">
      <h1 class="title"><PlayerSkipForwardIcon class="icon" stroke-width="1" />{{ $t("message.music.title") }}</h1>
      <div class="songs"><SpotifySong v-for="song in lasts" :key="song.name" :song="song" class="song" /></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "+/style/partials/variables";
  @import "+/style/partials/mixins";

  #last-songs {
    background-color: $powder-blue;

    padding: 1.5rem 0;

    .title {
      font-weight: 400;
      margin-bottom: 2rem;
    }

    .icon {
      vertical-align: bottom;
      margin-right: 1rem;
    }

    .songs {
      width: 50%;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;

      .song {
        height: 10vh;
      }
    }
  }

  @include tablet {
    #last-songs {
      padding: 1.5rem 5%;
      .songs {
        width: 75%;
      }
    }
  }

  @include mobile {
    #last-songs {
      padding: 1.5rem 5%;
      .songs {
        width: 100%;
      }
    }
  }
</style>
