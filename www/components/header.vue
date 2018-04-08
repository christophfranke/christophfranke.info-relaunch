<template>
	<header>
	  <div class="header-area headroom">
	    <div class="menu-area">
	    	<Desktop />
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
import components from './header/index.js';

export default {
	components
}
</script>

<style lang="scss" scoped>
.header-area {
	padding: 0 15px;
	width: 92.5vw;
	margin: 0 auto;
}
</style>