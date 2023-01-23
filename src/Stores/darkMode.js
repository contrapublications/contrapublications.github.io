import { defineStore } from 'pinia'

export const useDarkMode = defineStore({
  id: 'darkMode',
  state: () => ({
    mode: false
  }),
  getters: {
  },
  actions: {
    toggle() {
      this.mode = !this.mode
    }
  }
})