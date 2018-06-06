<template>
  <div class="services-page">
    <div class="w-100 pa4">
      <div class="cover bg-left bg-center-l">
        <div class="bg-black-80 pv6">
          <div class="tc-l">
            <h1 class="f2 f1-l fw2 white-90 mv0 lh-title">This is your super impressive headline</h1>
            <h2 class="fw1 f3 white-80 mt3 mb4">Now a subheadline where explain your wonderful new startup even more</h2>
            <a class="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Call to Action</a>
            <span class="dib v-mid ph3 white-70 mb3">or</span>
            <a class="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Secondary call to action</a>
          </div>
        </div>
      </div> 
      <!-- <div class="aspect-ratio aspect-ratio--16x9 mb4">
        <div class="aspect-ratio--object cover" style="background:url(http://mrmrs.github.io/photos/001.jpg) center;">
          <h1 class="f1 white lh-title">SOME TEXT GOES HERE</h1>
        </div>
      </div> -->
    </div>
    <section class="flex flex-wrap justify-around services-list">
      <article v-for="i in 4" :key="i" class="pa3" :class="`bg-black-${i}0`">
        <span class="pa6-l ph4-m pv2 ph3 w-60-ns center">
          <div class="cf w-100">
            <h3 class="f3 cf fl b dib highlight-header">Title #{{ i }}</h3>
          </div>
          <p class="f5 lh-copy mt0">
            Urlbox's screenshot API lets you quickly and easily add full page website screenshots to your site, app, blog or business process.
          </p>
        </span>
      </article>
    </section>
    <div class="w-100 pa4 bt b--black-10">
      <div class="mb4-l cf">
        <h1 class="fl w-100 pv0 f6 fw6 ttu tracked lh-title mt0 mb3">Studios</h1>
        <article v-for="i in 10" :key="i" class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
          <h4 class="f5 f4-l fw6">London</h4>
          <span class="f7 f6-l db black-70">11 Downey St.</span>
          <span class="f7 f6-l black-70">London, UK</span>
          <a href="tel:+5555555555" class="link dim f6 db fw6 pv3 black-70" title="Call the London office">+44 0 5555-5555</a>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.services-list {
  padding: 0 1rem;
}
.services-list article {
  width: calc(100%-2rem);
  margin-bottom: 2rem;
}
@media (min-width: 768px) {
  .services-list article {
    width: calc(50%-2rem);
  }
}
</style>
