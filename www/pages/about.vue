<template>
	<div>
		<breadcrumb title="About" :path="path" />
	</div>
</template>

<script>
import components from '~/components';

export default {
	components,
	data() {
		return {
  		path: [
	  		{
	  			slug: '/',
	  			title: 'Home'
	  		}
	  	],
		}
	}
}
</script>