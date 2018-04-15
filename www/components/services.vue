<template>
  <div class="basic-service-area">
    <div class="container">
      <div class="service-box" v-for="service in services" :key="service.title">
        <div class="service-icon">
          <span class="icon-pencil"></span>
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
}
</style>

<script>
export default {
  props: {
    services: {
      type: Array,
      default: () => []
    }
  }
}
</script>