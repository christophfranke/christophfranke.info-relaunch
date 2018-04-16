import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: Math.random()
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore
