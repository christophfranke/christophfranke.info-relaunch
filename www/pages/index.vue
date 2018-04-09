<template>
  <div>
    <home-slide :imageHandle="page.headerImage.handle" v-if="!$apollo.loading"/>
    <tiles />
    <service />
  </div>
</template>

<script>
import components from '~/components';
import query from '~/apollo/queries/page.gql'

export default {
  components,
  apollo: {
  	page: {
	    query: query,
			prefetch: () => ({slug: 'home' }),
      variables: () => ({slug: 'home' })
  	},
  },
  fetch() {
  	console.log('fetching...')
  	return new Promise((resolve) => {
  		setTimeout(() => {
  			console.log('done')
  			resolve()
  		}, 2000)
  	})
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
  		}
  	}
  }
};
</script>
