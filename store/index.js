import Vuex from 'vuex'
import data from '../apollo/data/all.json'


const resolveQuery = (query, variables) => {
  const apolloFetch = createApolloFetch({
    uri: 'https://api.graphcms.com/simple/v1/cjf6sh06n2m8q0113fo1pzjr0'
  })

  return apolloFetch({ query, variables })
    .catch((response) => {
      return response
    }).then((response)  => {
      return response
    })
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      routes: {},
      pages: {},
      projects: {},
      categories: {},
    },
    actions: {
      nuxtServerInit({ commit, state }, { route }) {
        state.routes = data.routes
        state.pages = data.pages
        state.projects = data.projects
        state.categories = data.categories
      }
    },
  })
}

export default createStore
