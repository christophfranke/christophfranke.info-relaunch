<template>
	<div>
    <header-slide :header="page.header" v-if="page.header" />
		<breadcrumb title="Imprint" :path="path" />
    <div v-html="page.text" class="container"></div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	padding: 60px 0 200px 0;
	max-width: 50vw;
}
</style>

<script>
import components from '~/components';
import page from '~/apollo/queries/page.gql';

export default {
	components,
  apollo: {
  	page: {
	    query: page,
			prefetch: () => ({slug: 'imprint' }),
      variables: () => ({slug: 'imprint' })
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