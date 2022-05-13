<script setup>
  import { BrandInstagramIcon, BrandGithubIcon, BrandLinkedinIcon } from "vue-tabler-icons";
</script>

<template>
  <section class="box-container wrapper">
    <div id="readme">
      <!-- <p>test</p> -->
      <h1 class="hi">{{ $t("message.bio.title") }}</h1>
      <!-- <p class="description">
        {{ $t("message.bio.bio1") }} <br />
        {{ $t("message.bio.bio2") }} <br />
        {{ $t("message.bio.bio3") }}
      </p> -->
      <div class="socials">
        <p>{{ $t("message.bio.social") }}</p>
        <a href="https://www.instagram.com/ehystiv/" target="__blank">
          <BrandInstagramIcon class="social-icon" size="30" stroke-width="1" />
        </a>
        <a href="https://github.com/Stiv1100001" target="__blank">
          <BrandGithubIcon class="social-icon" size="30" stroke-width="1" />
        </a>
        <a href="https://www.linkedin.com/in/stefano-bichicchi-68ba91169/" target="__blank">
          <BrandLinkedinIcon class="social-icon" size="30" stroke-width="1" />
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
    align-items: center;
    min-height: 60vh;

    #readme {
      width: 66%;
      text-align: right;

      .description,
      .socials > p {
        font-size: 1.3rem;
        font-weight: 100;
      }

      .hi {
        font-size: 2rem;
      }

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

        .social-icon {
          transition: transform 0.2s ease-in-out;
        }

        &:hover {
          .social-icon {
            transform: rotate(-45deg);
          }
        }

        &:visited {
          color: $turquoise-green;
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
</style>
