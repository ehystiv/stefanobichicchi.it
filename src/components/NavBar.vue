<script setup>
  import { BrandSpotifyIcon } from "vue-tabler-icons";
  import { useStore } from "../stores/spotify";
  import { computed, ref } from "vue";
  import { storeToRefs } from "pinia";
  import { useI18n } from "vue-i18n";

  let { t, locale } = useI18n({ useScope: "global" });
  const title = t("message.title");
  const writedTitle = ref("");
  const speed = 110;
  const i = ref(0);

  const showSpotify = ref(false);
  const store = useStore();

  const { lastSong } = storeToRefs(store);

  const switchedLocale = computed(() => {
    if (locale.value == "it") return "eng";
    else return "it";
  });

  function writeTitle() {
    if (writedTitle.value.length < title.length) {
      writedTitle.value += title[i.value];
      i.value++;
      setTimeout(writeTitle, speed);
    } else {
      showSpotify.value = true;
    }
  }

  writeTitle();
</script>

<template>
  <nav id="main-navbar">
    <div class="nav-container">
      <div class="title">
        <h1 class="name">{{ writedTitle }}<span class="underscore">_</span></h1>
      </div>
      <div>
        <Transition appear name="slide-fade">
          <div v-if="showSpotify" class="current-song">
            {{ $t("message.current_song") }} <a :href="lastSong?.trackUrl">{{ lastSong?.name || "Nessuna canzone" }}</a>
            <span><BrandSpotifyIcon size="25" stroke-width="1" /></span>
          </div>
        </Transition>
      </div>
      <div>
        <button class="btn" @click="$i18n.locale = switchedLocale">{{ switchedLocale }}</button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import "+/style/partials/_variables.scss";
  @import "+/style/partials/_mixins.scss";

  #main-navbar {
    position: fixed;
    width: 100vw;
    top: 0;
    background-color: white;
    z-index: 5;

    .nav-container {
      padding: 0.8rem 2rem;
      min-height: 8vh;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        width: 25%;
        .name,
        .underscore {
          font-weight: 400;
          font-size: 1.1rem;
        }

        .underscore {
          animation: fade 1.5s linear infinite;
          color: $bg;
        }
      }

      .current-song {
        display: flex;
        align-items: center;

        font-size: 0.9rem;

        a {
          white-space: nowrap;
          display: inline-block;
          margin-inline: 5px;
          color: black;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .btn {
        // display: inline-block;
        // width: 5vw;
        border: none;

        padding: 0.2rem 0.5rem;

        background-color: transparent;

        font-size: 1rem;
        text-transform: uppercase;

        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @include mobile {
    #main-navbar {
      .nav-container {
        padding: 0 0.5rem;
        .title {
          width: unset;
        }

        .current-song {
          display: none;
        }
      }
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
