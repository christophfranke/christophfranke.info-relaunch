<template>
  <div class="basic-slider" :style="imageStyle">
    <div class="container">
      <div class="slider-content text-white">
        <h2 class="cd-headline clip is-full-width">Hello, <br /> I am Christoph Franke &
          <span class="cd-words-wrapper">
            <b>{{ trait }}</b>
          </span>
        </h2>
        
        <p>Modern technology. Clean code. High performance.</p>
        <nuxt-link class="btn" to="/about">About me</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      traits: ['Developer', 'Mathematician', 'Musician', 'Freelancer']
    }
  },
  props: {
    imageHandle: {
      type: String,
      required: true
    }
  },
  computed: {
    trait() {
      return this.traits[0]
    },
    imageStyle() {
      const imageBase = 'https://media.graphcms.com'
      const imageWidth = 1400
      const imageHeight = 1400*0.75
      return `background-image: url(${imageBase}/resize=w:${imageWidth},fit:crop,align:top,h:${imageHeight}/${this.imageHandle});`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/partials/slider';

.slider-content {
  padding: 0 15px;
  width: 92.5vw;
  margin: 0 auto;  
}
</style>