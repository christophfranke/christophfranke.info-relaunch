<template>
  <div>
  	Page: {{ page }} /Page
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
};
</script>
