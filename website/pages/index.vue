<template>
  <section class="container">
    <img src="~assets/img/NuxtMicro.png" alt="Nuxt.js Logo" class="logo" />
    <div :class="['network',online ? 'online' : 'offline']">
      <div class="circle"></div>
      {{ online ? 'online' : 'offline' }}
    </div>
    <!-- <div>lat: {{ lat }}</div>
    <div>long: {{ long }}</div>     -->
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in users" :key="user.id" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}" class="button">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
import axios from '~/plugins/axios';

export default {
  async asyncData() {
    const { data } = await axios.get('/api/users');
    return { users: data };
  },
  head() {
    return {
      title: 'Users'
    };
  },
  data() {
    return {
      online: true,
      users: [],
      lat: 0,
      long: 0
    };
  },
  mounted() {
    if (!window.navigator) {
      this.online = false;
      return;
    }
    this.online = Boolean(window.navigator.onLine);
    console.log('navigator: ', navigator);
    window.addEventListener('offline', this._toggleNetworkStatus);
    window.addEventListener('online', this._toggleNetworkStatus);
    // navigator.geolocation.getCurrentPosition(this._geoSuccess);
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online';
    },
    _geoSuccess(position) {
      console.log('geo success. position is: ', position);
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
    }
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus);
    window.removeEventListener('online', this._toggleNetworkStatus);
  }
};
</script>

<style scoped>
.network {
  font-weight: 400;
  font-size: 1rem;
}
.network .circle {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: green;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
}
.network.offline .circle {
  background: red;
}
</style>
