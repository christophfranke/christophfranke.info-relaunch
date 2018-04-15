<template>
  <div class="basic-service-area">
    <div class="container">
      <div class="service-box" v-for="service in services" :key="service.title">
        <div class="service-icon" v-if="service.icon">
          <a :href="service.link" target="_blank">
            <lazy-image :handle="service.icon.handle" :aspectRatio="1" />
          </a>
        </div>
        <div class="service-content">
          <h3><a :href="service.link" target="_blank">{{ service.title }}</a></h3>
          <vue-markdown>{{ service.description }}</vue-markdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/partials/service';

.basic-service-area {
  background: #f6f6f6;
  padding-top: 90px;
  padding-bottom: 60px;
  text-align: center;
}

.container {
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
}

.service-box {
  width: calc(50% - 80px - 30px);
  margin: 15px;
  .service-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 30px;
    display: inline-block;
    img {
      transition: transform .3s;
      &:hover {
        transform: scale3D(1.125, 1.125, 1);
      }
    }
  }
}

</style>

<script>
import lazyImage from './lazy-image.vue'
import vueMarkdown from 'vue-markdown'

export default {
  components: {
    lazyImage,
    vueMarkdown
  },
  props: {
    services: {
      type: Array,
      default: () => []
    }
  }
}
</script>