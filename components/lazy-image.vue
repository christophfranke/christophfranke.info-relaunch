<template>
	<no-ssr :style="placerholderStyle">
		<img :src="src" v-if="handle" :style="imageStyle">
	</no-ssr>
</template>

<script>
import previewColor from '../util/previewColor.js'

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
		sizeStyle() {
			const width = (this.size && this.size.width) ? `width: ${this.size.width}px;` : ''
			const height = (this.size && this.size.height) ? `height: ${this.size.height}px;` : ''
			return `${width}${height}`
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
		previewColor() {
			return previewColor(this.image)
		},
		placerholderStyle() {
			const heightStyle = this.aspectRatio ? `padding-top: ${this.aspectRatio * 100}%` : ''
			return  `background-color: ${this.previewColor};${heightStyle}`
		},
		imageStyle() {
			return `${this.placerholderStyle}${this.sizeStyle}`
		}
	},
	data() {
		return {
			mounted: false,
			handle: this.image.handle
		}
	},
	mounted() {
		this.mounted = true
	}
}
</script>