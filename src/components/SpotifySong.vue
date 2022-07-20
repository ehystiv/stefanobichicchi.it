<script setup>
  const props = defineProps({
    song: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <div class="wrapper">
    <div class="img-container">
      <img :src="props.song?.artworkUrl" :alt="`${props.song.name} artwork`" />
    </div>
    <div class="info">
      <a class="title" :href="props.song.trackUrl">{{ props.song.name }}</a>
      <h6 class="author">{{ props.song.artists.reduce((prev, curr) => prev + " " + curr.name, "") }}</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "+/style/partials/variables";
  @import "+/style/partials/_mixins.scss";

  .wrapper {
    display: flex;

    .img-container {
      height: 100%;
      img {
        height: 100%;
        border-radius: 1rem;
      }
    }

    .info {
      margin-left: 3rem;
      padding: 0.3rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        display: inline-block;
        color: $bg;
        text-decoration: none;
        margin-bottom: 5px;
        margin-top: 5px;

        text-overflow: ellipsis;
        word-wrap: break-word;

        font-size: 1.2rem;

        &:hover {
          text-decoration: underline;
        }
      }

      .author {
        font-weight: 400;
        font-size: 1rem;
        text-overflow: ellipsis;
      }
    }
  }

  @include tablet {
    .wrapper {
      .info {
        margin-left: 1rem;
      }
    }
  }
</style>
