const { createApolloFetch } = require('apollo-fetch')

const routePromise = new Promise((resolve, reject) => {
  const apolloFetch = createApolloFetch({
    uri: 'https://api.graphcms.com/simple/v1/cjf6sh06n2m8q0113fo1pzjr0'
  })
  const query = `query Routes {
    projects: allProjects {
      slug
    }
    categories: allCategories {
        slug
      }
  }`
  apolloFetch({ query }).then((response) => {
      resolve(response.data.projects.map(project => `/${project.slug}`).concat(
        response.data.categories.map(category => `/portfolio/${category.slug}`)
      ))
    }).catch((error) => {
      reject(error)
    })
})

module.exports = {
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  generate: {
  	routes: () => routePromise
  },
  loading: false,
}
