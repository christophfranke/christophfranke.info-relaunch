<template>
	<div>
    <header-slide :header="page.header" v-if="page.header" />
	</div>
</template>

<style lang="scss" scoped>

</style>

<script>
import components from '~/components';
import page from '~/apollo/queries/page.gql';

export default {
	components,
  apollo: {
  	page: {
	    query: page,
			prefetch: () => ({slug: 'contact' }),
      variables: () => ({slug: 'contact' })
  	}
  },
	data() {
		return {
	  	page: {
	  		title: '...'
	  	}
		}
	},
	head() {
		return {
			title: this.page.title
		}
	}
}
</script>