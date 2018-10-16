<template>
  <div class="basic-slider" :style="imageStyle">
    <div class="container">
      <div :class="sliderContentClasses">
        <span v-html="header.text"></span>
        <call-to-action :cta="header.callToAction"  v-if="header.callToAction" />
      </div>
    </div>
  </div>
</template>

<script>
import previewColor from '../util/previewColor.js'

export default {
  components: {
    callToAction: () => import('./call-to-action.vue')
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
      let imageUrl = '';
      if (this.mounted && this.header.image) {
        const imageBase = 'https://media.graphcms.com'
        const imageWidth = this.$el.clientWidth
        const imageHeight = Math.round(imageWidth * 0.75)
        imageUrl = `background-image: url(${imageBase}/resize=w:${imageWidth},fit:crop,align:center,h:${imageHeight}/${this.header.image.handle});`
      }
      return `background-color: ${this.previewColor};${imageUrl}`
    },
    previewColor() {
      return previewColor(this.header.image)
    },
    sliderContentClasses() {
      return [
        "slider-content",
        this.header.colorTheme,
      ]
    }
  },
  mounted() {
    this.mounted = true
  }
}
</script>

<style lang="scss">
@import '../scss/partials/slider';

h1, h2, h3, h4, h5, h6, p, .btn {
  .Light &, .LightWithBackground & {
    color: white;
  }
  .Dark & {
    color: #232332;
  }
}
.slider-content {
  display: inline-block;
  padding: 15px;
  margin: 0 auto;
  &.LightWithBackground {
    background-color: rgba(0, 0, 0, 0.3);
  }
  h1, h2, h3, h4, h5, h6, p {
    margin-bottom: 0;
  }
}
</style>