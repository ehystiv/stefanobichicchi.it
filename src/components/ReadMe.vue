<script setup>
  import { BrandInstagramIcon, BrandGithubIcon, BrandLinkedinIcon, CoffeeIcon } from "vue-tabler-icons";
</script>

<template>
  <section class="box-container wrapper">
    <div id="readme">
      <h1 class="hi">{{ $t("message.bio.title") }}</h1>
      <p class="description">
        <span v-html="$t('message.bio.bio1')"></span> <br />
        {{ $t("message.bio.bio2") }} <br />
        {{ $t("message.bio.bio3") }}
      </p>
      <div class="socials">
        <p>{{ $t("message.bio.social") }}</p>
        <a href="https://www.instagram.com/ehystiv/" target="__blank">
          <BrandInstagramIcon class="social-icon" size="35" stroke-width="1" />
        </a>
        <a href="https://github.com/Stiv1100001" target="__blank">
          <BrandGithubIcon class="social-icon" size="35" stroke-width="1" />
        </a>
        <a href="https://www.linkedin.com/in/stefano-bichicchi-68ba91169/" target="__blank">
          <BrandLinkedinIcon class="social-icon" size="35" stroke-width="1" />
        </a>
        <a href="https://ko-fi.com/stivvv" target="__blank">
          <CoffeeIcon class="social-icon" size="35" stroke-width="1" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "+/style/partials/_variables.scss";
  @import "+/style/partials/_mixins.scss";
  .wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    min-height: 40vh;

    #readme {
      width: 66%;
      text-align: right;

      .description,
      .socials > p {
        font-size: 1.3rem;
        font-weight: 100;
      }

      .hi {
        font-size: 3rem;
      }

      .hi,
      .description,
      .socials {
        margin-bottom: 1rem;
      }

      .description,
      .socials {
        margin-right: 4rem;
      }

      .socials a {
        color: black;

        .social-icon {
          transition: transform 0.2s ease-in-out;
        }

        &:hover {
          .social-icon {
            transform: rotate(-45deg);
          }
        }

        &:visited {
          color: $bg;
        }
      }
    }
  }

  @include tablet {
    .wrapper {
      #readme {
        width: 100%;
      }
    }
  }

  @include mobile {
    .wrapper {
      min-height: 50vh;
      margin-top: 10vh;
      #readme {
        .hi {
          font-size: 1.8rem;
        }

        .description,
        .socials {
          margin-right: 1.8rem;
        }
      }
    }
  }
</style>
