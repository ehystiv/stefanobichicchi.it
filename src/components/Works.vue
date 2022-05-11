<script setup>
  import { ArrowDownLeftIcon } from "vue-tabler-icons";

  const jobs = [
    {
      name: "Il Palazzo dei Destini Incoricati",
      year: 2022,
      technologies: "Vue 3",
      url: "https://palazzo-destini.fulcrongrv.it/",
    },
    {
      name: "Book Cosmoderma",
      year: 2021,
      technologies: "Nuxt 2 + Nest.js",
      url: "https://book.cosmoderma.it",
    },
    {
      name: "Ristorante Claro de Luna",
      year: 2021,
      technologies: "Wordpress",
      url: "https://clarodelunaristorante.it/",
    },
    {
      name: "IndieGekko",
      year: 2020,
      technologies: "Nuxt 2 + PHP",
      url: "https://www.indiegekko.it/",
    },
  ];

  const learns = [
    {
      name: "Tutti gli esercizi Boolean",
      year: 2022,
      technologies: "HTML, CSS, Javascript, Vue 2, SCSS, PHP, Laravel",
      url: "https://github.com/stars/Stiv1100001/lists/boolean",
    },
    {
      name: "stefanobichicchi.it",
      year: 2022,
      technologies: "Vue 3 + Netlify",
      url: "/",
    },
    {
      name: "SecretSantaExtractor",
      year: 2021,
      technologies: "Python + sqlite3",
      url: "https://github.com/Stiv1100001/SecretSantaExtractor",
    },
    {
      name: "BachecaAppennino",
      year: 2020,
      technologies: "Nuxt 2 + Express + MongoDB",
      url: "https://github.com/Stiv1100001/BachecaAppennino",
    },
    {
      name: "FulcronGRV ",
      year: 2020,
      technologies: "Nuxt 2 + Express + MongoDB",
      url: "http://fulcrongrv.it",
    },
  ];
</script>

<template>
  <section id="works">
    <div class="container">
      <h1 class="work-title"><ArrowDownLeftIcon class="icon" stroke-width="1" />Dove sono ora e dove sono partito</h1>
      <div class="row">
        <div class="client">
          <h1 class="title">Lavori</h1>
          <div class="work-item" v-for="job in jobs" :key="job.name">
            <a :href="job.url">{{ job.name }}</a>
            <p>{{ job.technologies }} - {{ job.year }}</p>
          </div>
        </div>
        <div class="study">
          <h1 class="title">Didattica</h1>
          <div class="work-item" v-for="learn in learns" :key="learn.name">
            <a :href="learn.url"> {{ learn.name }} </a>
            <p>{{ learn.technologies }} - {{ learn.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "../assets/style/partials/variables";
  @import "../assets/style/partials/mixins";

  #works {
    margin-bottom: 3rem;

    .container {
      width: 80%;
      margin: 0 auto;

      .icon {
        vertical-align: bottom;
      }

      .work-title {
        margin-bottom: 2.5rem;

        text-align: right;
        font-weight: 600;
      }

      .row {
        display: flex;
        justify-content: space-between;
        align-content: stretch;
        gap: 2rem;

        .client,
        .study {
          width: 50%;
          position: relative;
          border-left-width: 0.6rem;
          border-right-width: 0.6rem;
          border-left-style: solid;
          border-right-style: solid;
          border-radius: 1rem;

          .title {
            position: absolute;
            transform: translateY(-100%);
            left: 50px;
            font-weight: 400;

            &::after {
              content: " ";
              display: inline-block;
              width: 120%;
              height: 0.3rem;
              position: absolute;
              background-color: $bone;
              z-index: -1;
              opacity: 0.7;
              bottom: 5px;
              left: -10%;
              border-radius: 1rem;
              transition: all 0.2s;
            }

            &:hover {
              &:after {
                height: 0.8rem;
              }
            }
          }

          .work-item {
            margin-left: 1rem;
            margin-top: 1rem;

            a {
              display: inline-block;
              font-size: 1rem;
              font-weight: 600;
              margin-bottom: 3px;
              color: black;
              text-decoration: none;

              transition: transform 0.5s;

              &:hover {
                text-decoration: underline;
                transform: translateX(5%);
              }
            }

            p {
              font-weight: 400;
              color: $laurel-green;
            }
          }
        }

        .client {
          border-color: $teal-blue;
        }

        .study {
          border-color: $ming;
        }
      }
    }
  }

  @include mobile {
    #works {
      .container {
        width: 95%;

        .row {
          flex-direction: column;

          .client,
          .study {
            width: 100%;
            margin-bottom: 2rem;

            border-left: none;
            border-right: none;

            border-top-width: 0.6rem;
            border-bottom-width: 0.6rem;

            border-top-style: solid;
            border-bottom-style: solid;

            .title {
              &::after {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
</style>
