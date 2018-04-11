<template>
	<div class="portfolio-item graphic">
		<div class="portfolio-wrapper">
			<div class="portfolio-thumb">
				<lazy-image :handle="project.media[0].handle" />
				<div class="view-icon">
					<a class="popup-video" href="https://www.youtube.com/watch?v=nrJtHemSPW4"><span class="icon-video "></span></a>									
				</div>
			</div>
			<div class="portfolio-caption">
				<h4><nuxt-link :to="slugUrl(project.slug)">{{ project.title }}</nuxt-link></h4>
				<div class="work-tag">
					<nuxt-link :to="typeUrl(type)" v-for="type in project.types" :key="type">{{ type }}</nuxt-link>
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
import lazyImage from './lazy-image.vue';

export default {
	components: {
		lazyImage
	},
	props: {
		project: {
			type: Object,
			required: true
		}
	},
	methods: {
		typeUrl: (type) => `/portfolio/${type}`.toLowerCase(),
		slugUrl: (slug) => `/${slug}`
	}
}
</script>