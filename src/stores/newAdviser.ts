import type { AdviserItem } from "@/type";
import { defineStore } from "pinia";

export const useAdviserStore = defineStore("advisert", {
  state: () => ({
    temporaryAdviser: [] as AdviserItem[],
  }),
  actions: {
    addTemporaryAdviser(adviser: AdviserItem) {
      this.temporaryAdviser.unshift(adviser);
    },
    getTemporaryAdviser() {
      return this.temporaryAdviser;
    },
    clearTemporaryAdviser() {
      this.temporaryAdviser = [];
    },
  },
});
