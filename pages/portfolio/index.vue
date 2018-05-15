<template>
	<div>
		<breadcrumb title="Portfolio" :path="path" />
		<tiles :projects="projects" :categories="categories"/>
	</div>
</template>

<script>
import components from '~/components';

export default {
	components,
	computed: {
		projects() {
			return this.$store.state.projects
		},
		categories() {
			return this.$store.state.categories
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
		}
	},
  head() {
  	return {
  		title: 'Portfolio'
  	}
  },
}
</script>