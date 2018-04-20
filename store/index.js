import Vuex from 'vuex'


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
      route: {}
    },
    actions: {
      nuxtServerInit({ dispatch }, { route }) {
        console.log('initialized', route.path)
      }
    }
  })
}

export default createStore