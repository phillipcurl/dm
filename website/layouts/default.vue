<template>
  <div class="avenir">
    <app-navigation/>
    <main>
      <nuxt/>
      <!-- <app-footer/>       -->
    </main>
  </div>
</template>

<script>
import AppNavigation from '~/components/Navigation.vue';
import AppFooter from '~/components/Footer.vue';

export default {
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style>
main {
  padding-left: 0;
  padding-top: 100px;
}
@media (min-width: 768px) {
  main {
    padding-left: 100px;
    padding-top: 0;
  }
}
</style>
