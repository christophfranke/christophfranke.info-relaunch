<template>
	<header>
	  <div class="header-area headroom">
	    <div class="menu-area">
	    	<Desktop :menu="menu" />
	    </div>
	    <div class="basic-mobile-menu">
	    	<Mobile :menu="menu"/>
	    </div>
      <div class="logo text-upper">
        <h4><nuxt-link to="/">Christoph Franke</nuxt-link></h4>
      </div>
    </div>
	</header>
</template>

<script>
import components from './header/index.js'
import query from '~/apollo/queries/menu.gql'

export default {
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
	computed: {
		menu() {
			console.log(this.pages)
			console.log(this.categories)
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
					url: '/portfolio',
					sub: [
						{
							title: 'Website',
							url: '/portfolio/website',
							sub: [
								{
									title: 'Achtung Kurve',
									url: '/achtung-kurve'
								},
								{
									title: 'Emerged Agency Website Relaunch',
									url: '/emerged-agency-relaunch'
								}
							]
						},
						{
							title: 'Video Game',
							url: '/portfolio/video-game'
						}
					]
				},
				{
					title: 'Contact',
					url: '/contact'
				}				
			]
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