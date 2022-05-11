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
      <img :src="props.song?.artworkUrl" alt="" />
    </div>
    <div class="info">
      <a class="title" href="props.song.trackUrl">{{ props.song.name }}</a>
      <h6 class="author">{{ props.song.artists.reduce((prev, curr) => prev + " " + curr.name, "") }}</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "+/style/partials/variables";
  @import "+/style/partials/_mixins.scss";

  .wrapper {
    display: flex;
    padding: 5px;

    .img-container {
      width: 60%;

      img {
        width: 100%;
        border-radius: 1rem;
      }
    }

    .info {
      width: 40%;
      padding: 10px 5px;

      overflow: hidden;

      .title {
        display: inline-block;
        color: $xanadu;
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
      .img-container {
        width: 50%;
      }

      .info {
        width: 50%;

        padding: 2px 5px;
      }
    }
  }
</style>
