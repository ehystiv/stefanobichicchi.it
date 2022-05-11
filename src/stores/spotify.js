import { defineStore } from "pinia";

export const useStore = defineStore("spotify", {
  state: () => ({
    lasts: [],
    lastSong: null,
  }),
});
