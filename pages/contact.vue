<template>
	<div>
    <header-slide :header="page.header" v-if="page.header" />
	</div>
</template>

<style lang="scss" scoped>

</style>

<script>
import components from '~/components';

export default {
	components,
  computed: {
  	page() {
  		return this.$store.state.routes['/contact']
  	}
  },
	head() {
		return {
			title: this.page.title
		}
	}
}
</script>