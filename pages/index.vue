<template>
  <div>
    <header-slide :header="page.header" v-if="page.header" />
    <tiles :projects="projects" :categories="categories" />
    <services :services="page.features" />
  </div>
</template>

<script>
import components from '~/components';

export default {
  components,
  head() {
  	return {
  		title: this.page.title
  	}
  },
  computed: {
    page() {
      return this.$store.state.routes['/']
    },
    projects() {
      return this.$store.state.projects
    },
    categories() {
      return this.$store.state.categories
    }
  },
};
</script>
