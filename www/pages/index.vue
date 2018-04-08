<template>
  <div>
    <home-slide :imageHandle="page.headerImage.handle"/>
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
  	}
  },
  head() {
  	return {
  		title: this.page.title
  	}
  }
};
</script>
