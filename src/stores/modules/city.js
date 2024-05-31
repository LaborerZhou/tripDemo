import { getCityAll } from '@/services/modules/city'
import {defineStore} from 'pinia'

const useCityStore = defineStore("city",{
  state: () => ({
    citys: {},
    currentCity: {
      cityName: "合肥"
    }
  }),
  actions: {
    async fetchAllCitiesData() {
      const allCity = await getCityAll()
      this.citys = allCity.data
    }
  }
})

export default useCityStore