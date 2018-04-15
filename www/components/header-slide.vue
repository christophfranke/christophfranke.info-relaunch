<template>
  <div class="basic-slider" :style="imageStyle">
    <div class="container">
      <div class="slider-content">
        <span v-html="header.text"></span>
        <call-to-action :cta="header.callToAction"  v-if="header.callToAction" />
      </div>
    </div>
  </div>
</template>

<script>
import callToAction from './call-to-action';

export default {
  components: {
    callToAction
  },
  data() {
    return {
      traits: ['Developer', 'Mathematician', 'Musician', 'Freelancer'],
      mounted: false
    }
  },
  props: {
    header: {
      type: Object,
      required: true
    }
  },
  computed: {
    trait() {
      return this.traits[0]
    },
    imageStyle() {
      if (this.mounted) {      
        const imageBase = 'https://media.graphcms.com'
        const imageWidth = this.$el.clientWidth
        const imageHeight = Math.round(imageWidth * 0.75)
        return this.header.image ? `background-image: url(${imageBase}/resize=w:${imageWidth},fit:crop,align:top,h:${imageHeight}/${this.header.image.handle});`:''
      }
      return `background-color: ${this.previewColor};`
    },
    previewColor() {
      let color = {
        r: 246,
        g: 246,
        b: 246,
        a: 1
      }
      if (this.header.image && this.header.image.previewColor) {
        color = JSON.parse(this.header.image.previewColor)
      }
      return  `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
    }
  },
  mounted() {
    this.mounted = true
  }
}
</script>

<style lang="scss">
@import '../scss/partials/slider';

.slider-content {
  padding: 0 15px;
  width: 92.5vw;
  margin: 0 auto;
  h1, h2, h3, h4, h5, h6, p {
    color: white;
    margin-bottom: 0;
  }
}
</style>