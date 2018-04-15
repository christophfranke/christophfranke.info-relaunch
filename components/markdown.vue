<template>
	<div v-html="markdown"></div>
</template>

<script>
import { markdown } from 'markdown'

export default {
	name: 'Markdown',
	props: {
		content: {
			type: String,
			required: true
		}
	},
	computed: {
		markdown() {
			return markdown.toHTML(this.content)
		}
	}
}
</script>