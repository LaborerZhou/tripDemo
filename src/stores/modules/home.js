import { getCategories, getHotSuggests } from '@/services/modules/home'
import { defineStore } from 'pinia'

const useHomeStore = defineStore("home", {
  state: () => ({
    hotData: [],
    categories: []
  }),
  actions: {
    async fetchHotSuggests() {
      const hotSuggests = await getHotSuggests()
      this.hotData = hotSuggests.data
    },
    async fetchCategories() {
      const categoriesData = await getCategories()
      this.categories = categoriesData.data
    }
  }
})

export default useHomeStore