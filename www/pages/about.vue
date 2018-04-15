<template>
	<div>
    <header-slide :header="page.header" v-if="page.header" />

		<div class="about-us-area">
			<div class="container">
				<div class="area-title">
					<h2>About Me</h2>
				</div>			
				<div class="row">

					<div class="about-text">
						<div v-html="page.text"></div>
						<call-to-action :cta="cta" v-for="cta in page.callToActions" :key="cta.url" />
					</div>

					<div class="about-img">
						<lazy-image :handle="page.media.handle" v-if="page.media" />
					</div>

				</div>
			</div>
		</div>

		<div class="experience-area">
			<h2>Experience</h2>
			<services :services="page.features" />
		</div>

	</div>
</template>

<style lang="scss" scoped>
@import '../scss/partials/about';
.about-us-area {
	padding: 90px 0;
}
.signature {
	margin-top: 20px;
}
.experience-area {
	padding-top: 60px;
	background-color: #f6f6f6;
}
.row {
	margin-top: 90px;
	display: flex;
}
.about-text, .about-img {
	width: calc(50% - 60px);
	padding: 0 30px;
}
.area-title {
	text-align: center;
	margin-bottom: 60px;
}

h2 {
	position: relative;
	text-align: center;
	&::after {		
    bottom: -25px;
	  content: "• • • •";
    display: block;
    font-size: 20px;
    left: 0;
    position: absolute;
    right: 0;	
	}
}
</style>

<script>
import components from '~/components';
import page from '~/apollo/queries/page.gql';

export default {
	components,
  apollo: {
  	page: {
	    query: page,
			prefetch: () => ({slug: 'about' }),
      variables: () => ({slug: 'about' })
  	}
  },
	data() {
		return {
	  	page: {
	  		title: '...'
	  	}
		}
	},
	head() {
		return {
			title: this.page.title
		}
	}
}
</script>