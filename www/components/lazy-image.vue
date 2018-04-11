<template>
	<img :src="src" v-if="handle">
</template>

<script>
export default {
	name: 'Asdf',
	props: {
		handle: {
			type: String,
			default: ''
		},
		baseUrl: {
			type: String,
			default: 'https://media.graphcms.com'
		},
		width: {
			type: Number,
			default: 0,
		}
	},
	computed: {
		src() {
			return this.handle ? `${this.baseUrl}/${this.handle}`: '';
		}
	}
}
</script>