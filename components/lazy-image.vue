<template>
	<no-ssr :style="placerholderStyle">
		<img :src="src" v-if="handle">
	</no-ssr>
</template>

<script>
export default {
	name: 'LazyImage',
	props: {
		image: {
			type: Object,
			required: true
		},
		baseUrl: {
			type: String,
			default: 'https://media.graphcms.com'
		},
		align: {
			type: String,
			default: 'top'
		},
		aspectRatio: {
			type: Number,
			default: 0
		},
	},
	computed: {
		size() {
			if (!this.mounted) {
				return null
			}
			const img = this.$el
			return img ? {
				width: img.clientWidth,
				height: Math.round(this.aspectRatio * img.clientWidth)
			} : null
		},
		src() {
			if (this.handle && this.size) {
				if (this.size.height) {
					return `${this.baseUrl}/resize=fit:crop,align:${this.align},w:${this.size.width},h:${this.size.height}/${this.handle}`
				} else {
					return `${this.baseUrl}/resize=w:${this.size.width}/${this.handle}`
				}
			} else {
				return ''
			}
		},
		placerholderStyle() {
			return this.mounted ? '' : `
				background-color: ${this.previewColor};
				padding-top:${100*this.aspectRatio}%;`
		}
	},
	data() {
		return {
			mounted: false,
			previewColor: this.image.previewColor,
			handle: this.image.handle
		}
	},
	mounted() {
		this.mounted = true
	}
}
</script>