<template>
	<div class="breadcrumb-area gray-bg pt-70 pb-40">
		<div class="container">
			<div class="basic-breadcrumb text-center">
				<h3 class="">{{ title }}</h3>
				<ol class="breadcrumb text-xs" v-if="path.length > 0">
					<li v-for="(item, index) in path" :key="path.slug" :class="{ hasDelimiter: index > 0 }">
						<nuxt-link :to="item.slug">{{ item.title }}</nuxt-link>
					</li>
					<li class="active hasDelimiter">{{ title }}</li>
				</ol>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@improt '~/scss/breadcrumb';

h3 {
	text-align: center;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 6px;
	margin-bottom: 10px;
}

.breadcrumb-area {
	padding: 70px 0;
	background-color: #f6f6f6;

	.breadcrumb {
    padding: 8px 15px;
    text-align: center;
		li {
			display: inline-block;
	  	font-size: 14px;
			&.hasDelimiter::before {	
				padding: 0 5px;
			  color: #ccc;
			  content: "/\00a0";
		  }
		  &.active {
		  	 color: #777;
		  }
		}
	}

}
</style>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		path: {
			type: Array,
			default: []
		}
	}
}
</script>