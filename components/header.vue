<template>
	<header>
	  <div class="header-area headroom">
	    <div class="menu-area">
	    	<desktop :menu="menu" />
	    </div>
	    <div class="basic-mobile-menu">
	    	<!-- <mobile :menu="menu"/> -->
	    </div>
      <div class="logo text-upper">
        <h4><nuxt-link to="/">Christoph Franke</nuxt-link></h4>
      </div>
    </div>
	</header>
</template>

<script>
import components from './header/index.js'

export default {
	name: 'Header',
	components,
	computed: {
    pages() {
      return this.$store.state.pages
    },
    categories() {
    	return this.$store.state.categories
    },
		menu() {
			/// create menu
			const menu = this.pages.map(page => ({
				title: page.title,
				url: `/${page.slug}`.replace('/home', '/')
			}))
			// insert portfolio
			menu.splice(2, 0, {
				title: 'Portfolio',
				url: '/portfolio',
				sub: this.categories.map(cat => ({
					title: cat.title,
					url: `/portfolio/${cat.slug}`,
					sub: cat.projects.map(project => ({
						title: project.title,
						url: `/${project.slug}`
					}))
				}))
			})

			return menu
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../scss/base';
.header-area {
	@extend .container;
}
</style>