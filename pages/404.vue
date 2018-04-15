<template>
  <div>
    <breadcrumb title="404" :path="path" />
    <div class="container">
      <h2>Probably not what you were looking for...</h2>
      <p>Sorry, an error occured and we don't know which page to show you. This should not happen.</p>
      <img :src="cat">
      <p>
        <call-to-action :cta="ctaBack" @click.prevent="back" />
        <call-to-action :cta="ctaHome" />
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 90px auto;
  text-align: center;
  max-width: 50vw;
}
h2 {
  margin-bottom: 10px;
}
img {
  margin: 30px 0;
}
</style>

<script>
import components from '~/components';

export default {
  components,
  props: {
    path: {
      type: Array,
      default: () => [
        {
          slug: '/',
          title: 'Home'
        }
      ]
    },
    ctaHome: {
      type: Object,
      default: () => ({      
        internalLink: true,
        url: '/',
        text: 'Home'
      })
    }
  },
  data() {
    return {
      hasBack: false
    }
  },
  methods: {
    back() {
      window.history.back;
    }
  },
  computed: {
    cat() {
      const choice = Math.ceil(4 * Math.random())
      return `/404-cat-${choice}.gif`
    },
    ctaBack() {
      return {      
        internalLink: true,
        url: '/',
        text: 'Back'
      }      
    }
  },
  head() {
  	return {
  		title: 'Oops... 404'
  	}
  },
};
</script>
