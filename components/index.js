export default {
	Header: () => import('./header.vue'),
	headerSlide: () => import('./header-slide.vue'),
	tiles: () => import('./tiles.vue'),
	services: () => import('./services.vue'),
	Footer: () => import('./footer.vue'),
	breadcrumb: () => import('./breadcrumb.vue'),
	lazyImage: () => import('./lazy-image.vue'),
	callToAction: () => import('./call-to-action.vue'),
	markdown: () => import('./markdown.vue')
}