<template>
  <div>
    <header-slide :header="page.header" v-if="page.header" />
    <nuxt-link to="/adsf">trigger 404</nuxt-link>
    <tiles :projects="projects" :categories="categories" />
    <services :services="page.features" />
  </div>
</template>

<script>
import components from '~/components';
import page from '~/apollo/queries/page.gql'
import projects from '~/apollo/queries/allProjects.gql'
import categories from '~/apollo/queries/allCategories.gql'


export default {
  components,
  apollo: {
  	page: {
	    query: page,
			prefetch: () => ({slug: 'home' }),
      variables: () => ({slug: 'home' })
  	},
    projects: {
      query: projects,
      prefetch: () => {},
    },
    categories: {
      query: categories,
      prefetch: () => {},
    }
  },
  head() {
  	return {
  		title: this.page.title
  	}
  },
  data() {
  	return {
  		page: {
  			title: '...'
  		},
      projects: [],
      categories: [],
      project: []
  	}
  }
};
</script>
