<template>
	<div>
		<breadcrumb title="Portfolio" :path="path" />
		<tiles :projects="projects" :categories="categories"/>
	</div>
</template>

<script>
import components from '~/components';
import projects from '~/apollo/queries/allProjects.gql';
import categories from '~/apollo/queries/allCategories.gql'

export default {
	components,
	apollo: {		
    projects: {
      query: projects,
      prefetch: true
    },
    categories: {
    	query: categories,
    	prefetch: true
    }
	},
	data() {
		return {
  		path: [
	  		{
	  			slug: '/',
	  			title: 'Home'
	  		}
	  	],
			projects: [],
			categories: [],
		}
	}
}
</script>