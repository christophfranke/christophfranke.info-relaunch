<template>
	<div>
		<breadcrumb title="Portfolio" :path="path" />
		<tiles :projects="projects" />
	</div>
</template>

<script>
import components from '~/components';
import projects from '~/apollo/queries/allProjects.gql';

export default {
	components,
	apollo: {		
    projects: {
      query: projects,
      prefetch: () => {},
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
			projects: []
		}
	}
}
</script>