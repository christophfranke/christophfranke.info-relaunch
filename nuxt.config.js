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
    pages: allPages {
      slug
    }
  }`
  apolloFetch({ query }).then((response) => {
      const statics = ['404', 'portfolio']
      const routes = response.data.projects.map(project => `/${project.slug}`).concat(
        response.data.categories.map(category => `/portfolio/${category.slug}`)).concat(
        response.data.pages.map(page => `/${page.slug}`.replace('/home','/')).concat(
        statics.map(slug => `/${slug}`))
      );

      let { pages, projects, categories } = response.data
      pages = pages.map(({ slug }) => slug)
      projects = projects.map(({ slug }) => slug)
      categories = categories.map(({ slug }) => slug)

      resolve(routes.map(route => {
        return {        
          route: route,
          payload: {
            pages,
            projects,
            categories,
            statics
          }
        }
      }));
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
    interval: 5,
  	routes: () => routePromise
  },
  loading: false,
}
