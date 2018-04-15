<template>
	<div v-if="project">
		<breadcrumb :title="project.title" :path="path"/>

		<div class="container">
			<div class="portfolio-details-area">
				<no-ssr>
					<carousel :perPage="1" :navigationEnabled="true">
						<slide v-for="image in project.media" :key="image.id">
							<img :src="`${imageBase}/resize=w:${imageWidth},fit:crop,align:top,h:${imageHeight}/${image.handle}`" />
						</slide>
					</carousel>
				</no-ssr>
			</div>

			<div class="details">
				<div class="facts">
					<ul>
						<li>Categories:
							<span v-for="(category, index) in project.categories">
								<span v-if="index > 0">, </span><nuxt-link :to="url(category.slug)">{{ category.tagName }}</nuxt-link>
							</span>
						</li>
						<li v-if="project.releaseDate">Released: {{ releaseFormatted }}</li>
						<li v-if="project.projectURL">Online: <a :href="project.projectURL" target="_blank">{{ project.projectURL }}</a></li>
						<li v-if="project.client">Client: {{ project.client }}</li>
					</ul>
					<div class="portfolio-view-btn">
						<call-to-action v-for="cta in project.callToActions" :key="cta.url" :cta="cta" />
					</div>
				</div>

				<div class="features">
					<div class="feature" v-for="feature in project.features">
						<h5 >{{ feature.title }}</h5>
						<p>{{ feature.description }}</p>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../scss/partials/project';

.portfolio-details-area {
	padding: 70px 0;
}
img {
	width: 100%;
}

.container {
	width: 80vw;
}

.details {
	margin-top: 70px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas:
		"facts features features"
}

.facts {
	grid-area: facts;
}
.features {
	grid-area: features;
	display: flex;
	flex-wrap: wrap;
}

.feature {
	margin-bottom: 30px;
	padding: 0 15px;
	width: calc(50% - 30px);
}
.portfolio-view-btn {
	margin-top: 20px;
}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel'
import dateFormat from 'dateformat'

import components from '~/components'
import query from '~/apollo/queries/project.gql'


export default {
  components: {
    Carousel,
    Slide,
    ...components
  },
  apollo: {
  	project: {
	    query: query,
			prefetch: ({ route }) => {
				return {
					slug: route.params.project
				}
			},
      variables() {
        return { slug: this.$route.params.project }
      },
      update(data) {
      	if (!data.project) {
      		this.$router.replace('/404')
      	}
      	return data.project
      }
  	}
  },
  mounted() {
  	if (window) {
  		this.imageWidth = Math.round(window.innerWidth * 0.8);
  		this.imageHeight = Math.round(this.imageWidth * 0.5);
  	}
  },
  methods: {
  	url: (slug) => `/portfolio/${slug}`
  },
  data() {
  	return {
  		path: [
  		{
  			slug: '/',
  			title: 'Home'
  		},
  		{
  			slug: '/portfolio',
  			title: 'Portfolio'
  		}
  		],
  		imageBase: 'https://media.graphcms.com',
	  	imageWidth: 1400,
	  	imageHeight: 1400*0.75,
	  	project: {
	  		title: '...',
	  	},
  	}
  },
  computed: {
  	releaseFormatted() {
  		return dateFormat(this.project.releaseDate, 'mmmm dS, yyyy')
  	}
  },
  head() {
  	return {
  		title: this.project ? this.project.title : '...'
  	}
  }
}
</script>