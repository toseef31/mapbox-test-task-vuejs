import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    carData: [],
  },
  getters: {
    carData(state){
      return state.carData
    }
  },
  mutations: {
    setData(state,payload){
      state.carData = payload;
    },
  },
  actions: {
   getMap({commit}){
       axios.get('https://opendata.maryland.gov/resource/65du-s3qu.json')
      .then(responce => {
        commit('setData',responce.data)
       })
    }
  
  }
})
