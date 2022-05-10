<script setup>
  import { BrandInstagramIcon } from "vue-tabler-icons";
</script>

<template>
  <section class="container">
    <div id="readme">
      <h1 class="hi">Ciao, sono Stefano!👋</h1>
      <p class="description">
        Sviluppatore WEB e amante della tecnologia, @Bologna. <br />
        Studente Boolean e autodidatta, amante del FullStack Web Developing, ho l'hobby di imparare nuovi linguaggi di
        programmazione. <br />
        Dungeon Master, videogamer, avido lettore. <br />
      </p>
      <div class="socials">
        <p>Seguimi sui social</p>
        <a href="https://www.instagram.com/ehystiv/" target="__blank"> <BrandInstagramIcon size="30" stroke-width="1" /> </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "../assets/style/partials/_variables.scss";
  @import "../assets/style/partials/_mixins.scss";
  .container {
    max-width: 80%;
    margin: 0 auto;

    display: flex;
    justify-content: flex-end;

    #readme {
      width: 66%;
      text-align: right;

      .hi,
      .description,
      .socials {
        margin-bottom: 1rem;
      }

      .description,
      .socials {
        margin-right: 3rem;
      }

      .socials a {
        color: black;
        &:visited {
          color: green;
        }
      }
    }
  }

  @include mobile {
    .container {
      max-width: 95%;

      #readme {
        width: 100%;
      }
    }
  }
</style>
