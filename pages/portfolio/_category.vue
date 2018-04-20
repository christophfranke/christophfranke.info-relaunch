<template>
	<div>
		<breadcrumb :title="category.title" :path="path" />
		<tiles :projects="category.projects"/>
	</div>
</template>

<script>
import components from '~/components';
import category from '~/apollo/queries/category.gql'

export default {
	components,
	computed: {
		category() {
			const url = `/portfolio/${this.$route.params.category}`
			return this.$store.state.routes[url]
		}
	},
	data() {
		return {
  		path: [
	  		{
	  			slug: '/',
	  			title: 'Home'
	  		},
	  		{
	  			slug: '/portfolio',
	  			title: 'Portfolio'
	  		}
	  	],
		}
	}
}
</script>