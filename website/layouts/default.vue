<template>
  <div class="avenir">
    <app-navigation/>
    <main>
      <nuxt/>
    </main>
    <app-footer/>
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
</style>
