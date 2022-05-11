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
    <div class="img">
      <img :src="props.song?.artworkUrl" alt="" />
    </div>
    <div class="info">
      <a class="title" href="props.song.trackUrl">{{ props.song.name }}</a>
      <h6 class="author">{{ props.song.artists.reduce((prev, curr) => prev + " " + curr.name, "") }}</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/style/partials/variables";
  @import "../assets/style/partials/_mixins.scss";

  .wrapper {
    display: flex;

    .img {
      padding: 2rem;
      width: 60%;
      img {
        width: 100%;
        border-radius: 1rem;
      }
    }

    .info {
      width: 40%;
      padding: 2.5rem 0.3rem;

      .title {
        display: inline-block;
        margin-bottom: 0.4rem;

        font-weight: 400;
        font-size: 1.5rem;
        color: $teal-blue;

        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      .author {
        font-weight: 400;
        font-size: 1rem;
      }
    }
  }

  @include tablet {
    .wrapper {
      .img {
        padding: 0.5rem;
        width: 50%;
      }

      .info {
        padding: 0.5rem;
        width: 50%;

        .title {
          font-size: 1.2rem;
        }

        .author {
          font-size: 0.9rem;
        }
      }
    }
  }
</style>
