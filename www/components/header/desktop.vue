<template>
	<nav>
	  <ul class="basic-menu clearfix">
	  	<menu-item v-for="item in menu" :key="item.url" :item="item"/>
	  </ul>
	</nav>
</template>

<style lang="scss" scoped>
@import '../../scss/base';

nav {
	@include until(s) {
		display: none;
	}
}
</style>

<script>
import components from './index.js';

export default {
	components,
	props: ['menu']
}
</script>