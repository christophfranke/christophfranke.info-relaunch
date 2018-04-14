<template>
	<span>
		<a class="btn" :href="cta.url" target="_blank" v-if="!cta.internalLink">{{ cta.text || cta.url }}</a>
		<nuxt-link class="btn" :to="cta.url" v-if="cta.internalLink">{{ cta.text || cta.url }}</nuxt-link>
	</span>
</template>

<script>
export default {
	props: {
		cta: Object,
		required: true
	}
}
</script>

<style lang="scss" scoped>
.btn {
	margin-top: 20px;
	margin-right: 20px;
}
</style>