<template>
	<div class="basic-portfolio-area">
		<div class="container">
			<div class="filter-menu" v-if="categories.length > 0">
				<button :class="{ active: !filter }" @click="setFilter('')">All</button>
				<button :class="{ active: filter == category.slug }" v-for="category in categories" @click="setFilter(category.slug)">{{ category.title }}</button>
			</div>			

			<div class="row-portfolio portfolio-style-2 portfolio-style-3">
				<transition-group name="tiles" class="tiles-container" tag="div">
					<tile v-for="project in filteredProjects" :project="project" :key="project.slug" />
				</transition-group>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.row-portfolio {
	position: relative;
}
.tiles-container {
	display: flex;
	flex-wrap: wrap;	
}
.portfolio-item {
	transition: all .3s ease-in-out;
}
.tiles-enter, .tiles-leave-to {
	transform: scale3D(0, 0, 0);
}
.tiles-leave-active {
	position: absolute;
}


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
import tile from './tile.vue';

export default {
	components: {
		tile
	},
	props: {
		projects: {
			type: Array,
			default: () => []
		},
		categories: {
			tpye: Array,
			default: () => []
		}
	},
	data() {
		return {
			filter: '',
		}
	},
	methods: {
		setFilter(slug) {
			this.filter = slug;
		}
	},
	computed: {
		filteredProjects() {
			return this.projects.filter(
				(project) => (!this.filter) || project.categories.map(
					(category) => category.slug).includes(this.filter));
		}
	}
}
</script>