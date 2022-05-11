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
    background-color: $bone;

    padding: 1.5rem 0;

    .title {
      font-weight: 400;
      text-align: right;
      margin-bottom: 2rem;
    }

    .icon {
      vertical-align: bottom;
      margin-right: 1rem;
    }

    .songs {
      display: flex;
      flex-wrap: wrap;
      row-gap: 3rem;

      .song {
        width: calc(100% / 4 - 2px);
      }
    }
  }

  @include tablet {
    #last-songs {
      padding: 1.5rem 5%;
      .songs {
        .song {
          width: calc(100% / 3 - 2px);
        }
      }
    }
  }
</style>
