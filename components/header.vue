<template>
	<header>
	  <div class="header-area headroom">
	    <div class="menu-area">
	    	<desktop :menu="menu" />
    	    number: {{ counter }}
	    </div>
	    <button @click="printCounter">print counter</button>
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
import { willPrefetch } from 'vue-apollo'
import components from './header/index.js'
import query from '~/apollo/queries/menu.gql'

export default willPrefetch({
	name: 'Header',
	components,
	apollo: {
		pages: {
			prefetch: true,
			query: query
		},
		categories: {
			prefetch: true,
			query: query
		}
	},
	methods: {
		printCounter() {
			console.log(this.counter)
		}
	},
	computed: {
    counter() {
      return this.$store.state.counter
    },
		menu() {
			if (this.pages && this.categories) {
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

			return [
				{
					title: 'Home',
					url: '/'
				},
				{
					title: 'About me',
					url: '/about'
				},
				{
					title: 'Portfolio',
					url: '/portfolio'
				},
				{
					title: 'Contact',
					url: '/contact'
				}				
			]
		}
	}
})
</script>

<style lang="scss" scoped>
@import '../scss/base';
.header-area {
	@extend .container;
}
</style>