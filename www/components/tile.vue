<template>
	<div class="portfolio-item">
		<div class="portfolio-wrapper">
			<div class="portfolio-thumb">
				<lazy-image :image="project.media[0]" />
			</div>
			<div class="portfolio-caption">
				<h4><nuxt-link :to="slug('/', project.slug)">{{ project.title }}</nuxt-link></h4>
				<div class="work-tag">
					<span v-for="(category, index) in project.categories" :key="category.slug">
						<span v-if="index > 0">, </span><nuxt-link :to="slug('/portfolio/', category.slug)">{{ category.displayName }}</nuxt-link>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<style lang="scss" scoped>
@import '../scss/partials/tiles';
.view-more {
	margin-top: 20px;
	text-align: center;
}
</style>

<script>
export default {
	components: {
		lazyImage: () => import('./lazy-image.vue')
	},
	props: {
		project: {
			type: Object,
			required: true
		}
	},
	methods: {
		slug: (path, slug) => `${path}${slug}`
	}
}
</script>