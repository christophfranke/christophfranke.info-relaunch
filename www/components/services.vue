<template>
  <div class="basic-service-area">
    <div class="container">
      <div class="service-box" v-for="service in services" :key="service.title">
        <div class="service-icon">
          <lazy-image :handle="service.icon.handle" :aspectRatio="1" v-if="service.icon" />
        </div>
        <div class="service-content">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
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
      transition: filter .3s, border-radius .3s;
      // filter: invert(0%) grayscale(0%);
    }
  }
  &:hover {
    img {
      border-radius: 50%;
      // border-radius: 0;
      // filter: invert(100%) grayscale(100%);
    }
  }
}

</style>

<script>
import lazyImage from './lazy-image.vue'

export default {
  components: {
    lazyImage
  },
  props: {
    services: {
      type: Array,
      default: () => []
    }
  }
}
</script>