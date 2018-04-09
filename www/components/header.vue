<template>
	<header>
	  <div class="header-area headroom">
	    <div class="menu-area">
	    	<Desktop/>
	    </div>
	    <div class="basic-mobile-menu">
	    	<Mobile />
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
		projects: {
			prefetch: true,
			query: query
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