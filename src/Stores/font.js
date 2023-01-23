import { defineStore } from 'pinia'

export const useFontStore = defineStore({
  id: 'font',
  state: () => ({
    fontSize: 16
  }),
  getters: {
    isFontLarge: (state) => state.fontSize > 30
  },
  actions: {
    increaseFontSize(amount) {
      this.fontSize += amount
    },
    decreaseFontSize(amount) {
      this.fontSize -= amount
    },
    resetFontSize() {
      this.fontSize = 16
    }
  }
})