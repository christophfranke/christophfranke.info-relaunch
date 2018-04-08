<template>
  <div class="basic-slider">
    <div class="container">
      <div class="slider-content text-white">
        <h2 class="cd-headline clip is-full-width">Hello, <br /> I am Christoph Franke &
          <span class="cd-words-wrapper">
            <b>{{ trait }}</b>
          </span>
          <span class="dot"></span> 
          <span class="dot"></span>
          <span class="dot"></span>
        </h2>
        
        <p>Web development using modern technology. Clean Code. Performance. AI.</p>
        <a class="btn" href="#">About me</a>
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
  computed: {
    trait() {
      return this.traits[0]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/partials/slider';

.basic-slider {
  background-image: url('~/assets/header-image.jpg');
}

.slider-content {
  padding: 0 15px;
  width: 92.5vw;
  margin: 0 auto;  
}
</style>