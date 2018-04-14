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
	apollo: {		
    category: {
      query: category,
			prefetch: ({ route }) => {
				return {
					slug: route.params.category
				}
			},
      variables() {
        return { slug: this.$route.params.category }
      }
    },
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
			category: {
				title: '...',
				projects: [],
			}
		}
	}
}
</script>