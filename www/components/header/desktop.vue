<template>
	<nav>
	  <ul class="basic-menu clearfix">
	    <li><nuxt-link to="/">Home</nuxt-link></li>
	    <li><nuxt-link to="/about">About me</nuxt-link></li>
	    <!-- PORTFOLIO -->
	    <li>
	      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
	      <ul>
	        <li>
	          <nuxt-link to="/portfolio/websites">Websites <i class="fa fa-angle-right"></i></nuxt-link>
	          <ul>
	            <li><nuxt-link to="portfolio-grid-2-cols.html">2 Columns</nuxt-link></li>
	          </ul>
	        </li>
	      </ul>
	    </li>
	    <!-- END PORTFOLIO -->
	    <li><a href="service.html">Service</a></li>
	    <li><a href="#">Pages</a>
	      <ul>
	        <li><a href="about.html">About Us</a></li>
	        <li><a href="service.html">Service</a></li>                       
	        <li><a href="pricing.html">Pricing</a></li>
	        <li><a href="contact.html">Contact</a></li>
	        <li><a href="404.html">404 Page</a></li>
	      </ul>
	    </li>                                           
	    <!-- BLOG -->
	    <li>
	      <a href="blog-classic-left-sidebar.html">Blog</a>
	      <ul>
	        <li>
	          <a href="#">Grid <i class="fa fa-angle-right"></i></a>
	          <ul>
	            <li><a href="blog-grid-2-col.html">2 Columns</a></li>
	            <li><a href="blog-grid-3-col.html">3 Columns</a></li>
	            <li><a href="blog-grid-4-col.html">4 Columns</a></li>
	            <li><a href="blog-grid-full-width.html">Full Width</a></li>
	          </ul>
	        </li>

	        <li>
	          <a href="#">Classic <i class="fa fa-angle-right"></i></a>
	          <ul>
	            <li><a href="blog-classic-left-sidebar.html">Sidebar Left</a></li>
	            <li><a href="blog-classic-right-sidebar.html">Sidebar Right</a></li>
	            <li><a href="blog-classic-no-sidebar.html">Without Sidebar</a></li>
	          </ul>
	        </li>

	        <li>
	          <a href="#">Masonry <i class="fa fa-angle-right"></i></a>
	          <ul>
	            <li><a href="blog-masonry-2-col.html">2 Columns</a></li>
	            <li><a href="blog-masonry-3-col.html">3 Columns</a></li>
	            <li><a href="blog-masonry-4-col.html">4 Columns</a></li>
	            <li><a href="blog-masonry-full-width.html">Full Width</a></li>
	          </ul>
	        </li>

	        <li>
	          <a href="#">Thumbnail <i class="fa fa-angle-right"></i></a>
	          <ul>
	            <li><a href="blog-thumbnail-left-sidebar.html">Sidebar Left</a></li>
	            <li><a href="blog-thumbnail-right-sidebar.html">Sidebar Right</a></li>
	            <li><a href="blog-thumbnail-no-sidebar.html">Without Sidebar</a></li>
	          </ul>
	        </li>

	        <li>
	          <a href="#">Single Post <i class="fa fa-angle-right"></i></a>
	          <ul>
	            <li><a href="blog-single-sidebar-left.html">Sidebar Left</a></li>
	            <li><a href="blog-single-sidebar-right.html">Sidebar Right</a></li>
	            <li><a href="blog-single-no-sidebar.html">Without Sidebar</a></li>
	          </ul>
	        </li>
	      </ul>
	    </li>
	    <!-- END BLOG -->
	    <li><a href="contact.html">Contact</a></li>
	  </ul>
	</nav>
</template>

<style lang="scss" scoped>
@import '../../scss/base';

nav {
	@include until(s) {
		display: none;
	}
}
</style>

<script>
export default {
	props: ['pages', 'projects']
}
</script>