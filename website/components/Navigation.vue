<template>
  <header class="fixed flex flex-column-ns justify-between bg-dark-gray navigation">
    <nuxt-link to="/" class="link dim bb b--white-20">
      <h1 class="f2 lh-title tc white">dm</h1>
    </nuxt-link>
    <nav class="w-100 f6 fw6 tc ttu">
      <!-- <nuxt-link to="/" title="Home" class="link dim db pa3">Home</nuxt-link> -->
      <nuxt-link to="/services" title="Services" class="link dim db white pa3">Services</nuxt-link>
      <nuxt-link to="/work" title="Home" class="link dim db white pa3">Work</nuxt-link>
      <nuxt-link to="/blog" title="Services" class="link dim db white pa3">Blog</nuxt-link>      
      <nuxt-link to="/contact" title="Services" class="link dim db white pa3">Contact</nuxt-link>
      <nuxt-link to="/about" title="Services" class="link dim db white pa3">About</nuxt-link>
    </nav>
    <div class="flex bt b--white-20">
      <nuxt-link to="/" title="Home" class="w-50 link dim tc white pv3 br b--white-20">&</nuxt-link>
      <nuxt-link to="/" title="Home" class="w-50 link dim tc white pv3">&</nuxt-link>      
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.navigation {
  width: 100vw;
  height: 100px;
  z-index: 1000;
  left: 0;
  top: 0;
  overflow: hidden;
}
@media (min-width: 768px) {
  .navigation {
    width: 100px;
    height: 100vh;
  }
}
</style>
