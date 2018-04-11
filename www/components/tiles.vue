<template>
	<div class="basic-portfolio-area">
		<div class="container">
			<div class="filter-menu">
				<button class="active">ALL</button>
				<button v-for="type in types">{{ type }}</button>
			</div>			

			<div class="row-portfolio portfolio-style-2 portfolio-style-3">
				<tile v-for="project in projects" :project="project" :key="project.slug" />
			</div>
			<div class="view-more">
				<a class="btn btn-large" href="#">View More</a>
			</div>			
		</div>
	</div>
</template>

<style lang="scss" scoped>
.basic-portfolio-area {
	padding: 90px 0;
}
.filter-menu{
	text-align: center;
	margin-bottom: 40px;
	button {
	  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
	  border: 0 none;
	  color: #444;
	  font-family: dosis;
	  font-weight: 700;
	  letter-spacing: 2px;
	  margin: 0 15px;
	  padding: 6px 0;
	  position: relative;
	  text-transform: uppercase;
		&::after {
		  background: #777 none repeat scroll 0 0;
		  bottom: -2px;
		  content: "";
		  height: 1px;
		  left: 0;
		  opacity: 0;
		  position: absolute;
		  right: 0;
		  transition: all 0.3s ease 0s;
		  width: 20px;
		}
		&.active:after,
		&:hover:after {
			opacity:1
		}
	}
}
</style>

<script>
import lazyImage from './lazy-image.vue';
import tile from './tile.vue';

export default {
	components: {
		lazyImage,
		tile
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
	}
}
</script>