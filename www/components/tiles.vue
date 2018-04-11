<template>
	<div class="basic-portfolio-area">
		<div class="container">
			<div class="filter-menu">
				<button class="active">ALL</button>
				<button v-for="type in types">{{ type }}</button>
			</div>			

			<div id="portfolio-grid" class="row-portfolio portfolio-style-2 portfolio-style-3">

				<div class="portfolio-item graphic" v-for="project in projects">
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
								<nuxt-link :to="typeUrl(type)" v-for="type in project.types">{{ type }}</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="view-more">
				<a class="btn btn-large" href="#">View More</a>
			</div>			
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../scss/partials/tiles';
.basic-portfolio-area {
	padding: 90px 0;
}
.filter-menu {
	text-align: center;
	margin-bottom: 40px;
}
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
		projects: {
			type: Array,
			default: [],
		},
		types: {
			tpye: Array,
			default: () => ['Online Shop', 'Video Game', 'High Performance Computing', 'Website']
		}
	},
	methods: {
		typeUrl: (type) => `/portfolio/${type}`.toLowerCase(),
		slugUrl: (slug) => `/${slug}`
	}
}
</script>