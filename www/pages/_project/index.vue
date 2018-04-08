<template>
	<pre>{{ project }}</pre>
<!-- 	<div class="portfolio-details-area ptb-70">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="portfolio-full-img">
						<img src="img/portfolio/details/1.jpg" alt="" />
					</div>
				</div>
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
	</div> -->
</template>

<script>
// import gql from 'graphql-tag'

// const query = gql`
// query project($slug: String!) {
//   project: Project(slug: $slug) {
//     id
//   }
// }
// `
import query from '~/apollo/queries/project.gql'

export default {
  apollo: {
  	project: {
	    query: query,
			prefetch: ({ route }) => {
				console.log(route.params.project);
				return {
					slug: route.params.project
				}
			},
      variables() {
        return { slug: this.$route.params.project }
      }
  	}
  }
}
</script>