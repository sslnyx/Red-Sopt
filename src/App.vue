<template>
  <div
    id="app"
    v-if="
      $store.state.data.allProjectsLoaded &&
      $store.state.data.allPagesLoaded &&
      $store.state.data.allProjectsTWLoaded &&
      $store.state.data.allPackagesLoaded
    "
  >
    <LocaleSwitcher />

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

export default {
  components: {
    LocaleSwitcher
  }
}
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// main {
//   min-width: 100vw;
//   min-height: 100vh;
// }
</style>
