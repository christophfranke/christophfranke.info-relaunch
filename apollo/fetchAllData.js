const { createApolloFetch } = require('apollo-fetch')
const fs = require('mz/fs')

const apolloFetch = createApolloFetch({
  uri: 'https://api.graphcms.com/simple/v1/cjf6sh06n2m8q0113fo1pzjr0'
})

const resolveQuery = (query, variables) => {
  return apolloFetch({ query, variables })
    .catch((response) => {
    	console.error(response)
      return response
    }).then((response)  => {
      return response
    })
}

const routes = require('./rawQueries/routes.js')
const queryRoutes = () => {
	return resolveQuery(routes)
		.then(({ data }) => data)
}

const page = require('./rawQueries/page.js')
const project = require('./rawQueries/project.js')
const category = require('./rawQueries/category.js')
const querySlugs = (slugs, query, routeCallback, fieldName) => {
  return Promise.all(
    slugs.map(slug => {
    	const route = routeCallback(slug)
    	return resolveQuery(query, { slug })
	      .then(({ data }) => ({
	    		...data[fieldName],
	    		route
	      }))
    })
  )	
}

const queryPages = (pages) => {
	return querySlugs(
		pages,
		page,
		(slug) => {
			return `/${slug}`.replace('/home', '/')
		},
		'page'
	)
}

const queryProjects = (projects) => {
	return querySlugs(
		projects,
		project,
		(slug) => {
			return `/${slug}`
		},
		'project'
	)
}

const queryCategories = (categories) => {
	return querySlugs(
		categories,
		category,
		(slug) => {
			return `/portfolio/${slug}`
		},
		'category'
	)
}

queryRoutes().then((routes) => {
	const pages = queryPages(routes.pages.map(({ slug }) => slug))
	const projects = queryProjects(routes.projects.map(({ slug }) => slug))
	const categories = queryCategories(routes.categories.map(({ slug }) => slug))

	Promise.all([pages, projects, categories])
		.then(([pages, projects, categories]) => {
				const data =[pages, projects, categories].reduce((data, list) => {
						return data.concat(list)
					}, [])
					.reduce((data, page) => {
						console.log('fetched', page.route)
						return {
							...data,
							[page.route]: page
						}
				}, {})
				return {
					routes: data,
					pages,
					projects,
					categories
				}
	}).then((data) => {
		return fs.writeFile(`${__dirname}/data.json`, JSON.stringify(data))
	})
})