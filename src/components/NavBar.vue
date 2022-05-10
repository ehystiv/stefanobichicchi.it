<script>
  export default {
    name: "NavBar",

    data: () => ({
      title: "Stefano Bichicchi - Sviluppatore Web",
      writedTitle: "",
      speed: 110,
      i: 0,
      spotifySongs: [],
    }),

    methods: {
      writeTitle() {
        if (this.writedTitle.length < this.title.length) {
          this.writedTitle += this.title[this.i];
          this.i++;
          setTimeout(this.writeTitle, this.speed);
        }
      },
    },

    created() {
      this.writeTitle();
    },
  };
</script>

<template>
  <nav id="main-navbar">
    <div class="nav-container">
      <div>
        <h1 class="name">{{ writedTitle }}<span class="underscore">_</span></h1>
      </div>
      <div>
        <button class="btn">ita</button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  #main-navbar {
    .nav-container {
      padding: 0.8rem 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .name,
      .underscore {
        font-weight: 400;
        font-size: 1.1rem;
      }

      .underscore {
        animation: fade 1.5s linear infinite;
      }

      .btn {
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
</style>
