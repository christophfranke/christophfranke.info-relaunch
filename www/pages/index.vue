<template>
  <div>
    <home-slide :imageHandle="page.headerImage.handle" v-if="!$apollo.loading"/>
    <tiles :projects="projects" />
    <service />
  </div>
</template>

<script>
import components from '~/components';
import page from '~/apollo/queries/page.gql'
import projects from '~/apollo/queries/allProjects.gql'


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
  	}
  }
};
</script>
