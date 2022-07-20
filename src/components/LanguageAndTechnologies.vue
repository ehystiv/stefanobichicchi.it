<script setup>
  const items = [
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-bootstrap-plain",
    "devicon-sass-original",
    "devicon-javascript-plain",
    "devicon-typescript-plain",
    "devicon-nestjs-plain-wordmark",
    "devicon-vuejs-plain",
    "devicon-nuxtjs-plain",
    "devicon-php-plain",
    "devicon-laravel-plain",
    "devicon-nodejs-plain",
    "devicon-c-plain",
    "devicon-java-plain",
    "devicon-python-plain",
    "devicon-git-plain",
    "devicon-github-original",
    "devicon-express-original-wordmark",
    "devicon-windows8-original",
    "devicon-linux-plain",
    "devicon-mongodb-plain-wordmark",
    "devicon-mysql-plain-wordmark",
    "devicon-postgresql-plain-wordmark",
    "devicon-nginx-original-wordmark",
    "devicon-godot-plain colored",
    "devicon-npm-original-wordmark colored",
    "devicon-yarn-plain colored",
    "devicon-raspberrypi-line colored",
    "devicon-ubuntu-plain colored",
    "devicon-vscode-plain colored",
  ];
</script>

<template>
  <section id="lang-tech">
    <div class="box-container">
      <h1 class="title">{{ $t("message.lang.title") }}</h1>
      <div class="languages">
        <div v-for="(item, index) in items" :key="`lang-${index}`" class="lang">
          <em :class="item" class="colored"></em>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "+/style/partials/variables";
  @import "+/style/partials/mixins";
  @import "+/style/partials/customs";

  #lang-tech {
    background-color: $turquoise-green;

    .box-container {
      padding: 2rem 0;

      .title {
        font-weight: 400;
        font-size: 1.8rem;
        margin-bottom: 2rem;
      }

      .languages {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .lang {
          min-width: 4rem;
          min-height: 4rem;
          font-size: 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-inline: 0.5rem;
          margin-bottom: 1rem;
          background-color: white;
          border-radius: 50%;

          transition: all 0.2s linear;

          &:hover {
            transform: scale(1.2) rotate(360deg);
          }
        }
      }
    }
  }
</style>
