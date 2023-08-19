import { defineStore } from "pinia";
export const useMessageStore = defineStore("message", {
  state: () => ({
    message: {} as Record<string, string>,
  }),
  actions: {
    updateMessage(studentId: string, message: string) {
      this.message[studentId] = message;
    },
    getMessage(studentId: string): string {
      return this.message[studentId] || "";
    },
  },
});
