<template>
	<div class="tiles">
		<div class="container">
			<div class="filter-menu" v-if="categories.length > 0">
				<button :class="{ active: !filter }" @click="setFilter('')">All</button>
				<button :class="{ active: filter == category.slug }" v-for="category in categories" @click="setFilter(category.slug)">{{ category.title }}</button>
			</div>

			<div class="container list-wrapper">
			  <transition-group name="list-complete">
			    <span
			      v-for="project in filteredProjects"
			      v-bind:key="project.slug"
			      class="list-complete-project"
			    >
				    <span class="project-inner">
				    	<nuxt-link :to="slug('/', project.slug)">
				    		<lazy-image :image="project.media[0]" :aspectRatio="0.6" />
				    		<span class="details">
				    			<h4>{{ project.title }}</h4>
									<span class="categories">
										<span v-for="(category, index) in project.categories" :key="category.slug">
											<span style="display:inline" v-if="index > 0">, </span>
											{{ category.tagName }}
										</span>
									</span>
				    		</span>
				    	</nuxt-link>
				    </span>
			    </span>
			  </transition-group>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.tiles {
	margin: 90px 0;
}
.list-wrapper {
	position: relative;
}
.categories {
	position: absolute;
	bottom: 20px;
	left: 20px;
	display: flex;
	font-size: 16px;
	width: calc(100% - 40px);
}
.list-complete-project {
  transition: all .5s ease-out;
  display: inline-block;
  width: calc(33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
	position: relative;
	img {
		display: block;
	}
  .details {
  	border: 1px solid rgba(68, 68, 68, 0.1);
  	position: absolute;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	opacity: 0;
  	background-color: rgba(255, 255, 255, 0.75);
  	transition: opacity .3s;
  	display: flex;
  	align-items: center;
  	justify-content: center;
  	h4 {
		  font-size: 18px;
		  font-weight: 500;
		  letter-spacing: 1px;
		  padding: 0 20px;
  	}
  }
  a:hover {
  	.details {
  		opacity: 1;
  	}
  }
}
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  img {
  	transform: scale3D(0, 0, 1);
  }
}
.list-complete-leave-active {
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
		  transition: all .5s ease-in-out 0s;
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

export default {
	components: {
		lazyImage
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
	    items: [1,2,3,4,5,6,7,8,9],
	    nextNum: 10
		}
	},
	methods: {
		setFilter(slug) {
			this.filter = slug;
		},
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
		slug: (path, slug) => `${path}${slug}`
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