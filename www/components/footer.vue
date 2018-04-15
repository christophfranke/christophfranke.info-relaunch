<template>
  <footer>
    <div class="basic-footer">
      <div class="container">
        <div class="footer-logo">
          <h3><nuxt-link to="/">Christoph Franke</nuxt-link></h3>
        </div>
        <div class="social-icon">
          <a href="https://github.com/christophfranke"><img src="~/assets/github.png"></a>
          <a href="https://www.linkedin.com/in/christoph-franke-44095673/"><img src="~/assets/linked-in.png"></a>
        </div>
        <div class="footer-menu">
          <nav>
            <ul>
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li><nuxt-link to="/about">About</nuxt-link></li>
              <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
              <li><nuxt-link to="/contact">Contact</nuxt-link></li>
              <li><nuxt-link to="/imprint">Imprint</nuxt-link></li>
            </ul>
          </nav>
        </div>
        <div class="copyright">
          <p>&copy; Christoph Franke 2018<br>&hearts;</p>
        </div>
      </div>
    </div>
  </footer>	
</template>

<style lang="scss" scoped>
@import '../scss/partials/footer';

.basic-footer {
  padding: 90px 0;
  text-align: center;
  background-color: #f6f6f6;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-menu {
  margin-top: 30px;
}
.copyright {
  margin-top: 20px;
}

</style>