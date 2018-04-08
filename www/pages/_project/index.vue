<template>
	<div>
		<breadcrumb :title="project.title" :path="path"/>

		<div class="portfolio-details-area">
			<!-- {{ project }} -->
			<div class="container">
				<no-ssr>
					<carousel :perPage="1" :navigationEnabled="true">
						<slide v-for="image in project.media" :key="image.id">
							<img :src="`${imageBase}/resize=w:${imageWidth},fit:crop,align:top,h:${imageHeight}/${image.handle}`" />
						</slide>
					</carousel>
				</no-ssr>
			</div>

			<div class="row mt-70">
				<div class="col-md-4">
					<ul class="project-details">
						<li class="font-alt">Categories: <a href="#">Photography</a>,<a href="#">Design</a></li>
						<li class="font-alt">Released: 23 November 2017</li>
						<li class="font-alt">Online: <a href="#">www.site.com</a></li>
						<li class="font-alt">Client: <a href="#">BasicTheme</a></li>
					</ul>
					<div class="portfolio-view-btn mt-20">
						<a class="btn" href="#">View Project</a>
					</div>
				</div>
				<div class="col-md-8">
					<div class="row multi-columns-row">
						<div class="col-sm-6 col-md-6 mb-30">
							<h5 class="font-alt m-t-0">Highly customizable</h5>
							<p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
						</div>

						<div class="col-sm-6 col-md-6 mb-30">
							<h5 class="font-alt m-t-0">Responsive design</h5>
							<p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
						</div>

						<div class="col-sm-6 col-md-6 mb-30">
							<h5 class="font-alt m-t-0">Optimised for speed</h5>
							<p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
						</div>

						<div class="col-sm-6 col-md-6 mb-30">
							<h5 class="font-alt m-t-0">Features & plugins</h5>
							<p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
						</div>
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
</style>

<script>
import query from '~/apollo/queries/project.gql'
import { Carousel, Slide } from 'vue-carousel'
import components from '~/components'

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
      }
  	}
  },
  mounted() {
  	if (window) {
  		this.imageWidth = Math.round(window.innerWidth * 0.8);
  		this.imageHeight = Math.round(this.imageWidth * 0.5);
  	}
  },
  data() {
  	return {
  		path: [
  		{
  			slug: '/',
  			title: 'Home'
  		},
  		{
  			slug: '/porfolio',
  			title: 'Portfolio'
  		}
  		],
  		imageBase: 'https://media.graphcms.com',
	  	imageWidth: 1400,
	  	imageHeight: 1400*0.75
  	}
  },
  head() {
  	return {
  		title: this.project.title
  	}
  }
}
</script>