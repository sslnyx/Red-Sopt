<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HelloI18n /> -->
    <!--
    <p>{{ $t("main.welcome", { company: appName }) }}</p>

    <p>{{ $tc("main.message", 100) }}</p>

    <p>{{ $d(new Date(), "long") }}</p>

    <p>{{ $n(100, "currency") }}</p> -->
    <div class="index-wrapper">
      <transition name="fade">
        <h2>00{{ swiperIndex + 1 }}</h2>
      </transition>
    </div>
    <FrontPageSlider :pageContent="pageContent" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloI18n from '@/components/HelloI18n.vue'
import { bus } from '../main'

import FrontPageSlider from '@/components/FrontPageSlider.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      appName: process.env.VUE_APP_NAME,
      locale: '',
      ProperPageContent: {},
      swiperIndex: 0
    }
  },
  computed: {
    ...mapGetters(['allPages']),

    pageContent () {
      return this.getPages()
    }
  },
  components: {
    // HelloWorld
    // HelloI18n,
    FrontPageSlider
  },
  methods: {
    renameLocale () {
      this.$i18n.locale === 'en'
        ? (this.locale = 'en_US')
        : (this.locale = 'zh_TW')
    },
    getPages () {
      this.ProperPageContent = {}

      this.renameLocale()

      this.allPages.forEach((element, i) => {
        if (
          element.polylang_current_lang === this.locale &&
          ![51, 36].includes(element.id)
        ) {
          this.ProperPageContent[i] = element
        }
      })
      return this.ProperPageContent
    }
  },
  mounted () {
    bus.$on('updateIndex', index => {
      this.swiperIndex = index
    })
  }
}
</script>

<style lang="scss">
// .home{
//   height: 100vh;
//   width: 100vw;
// }
.index-wrapper {
  position: absolute;
  pointer-events: none;
  bottom: 0;
  z-index: 10;
  writing-mode: vertical-lr;
  width: 100%;
  overflow: hidden;
  height: 400px;
  h2 {
    font-size: 200px;
    position: absolute;
    font-weight: bold !important;
    margin: 0;
    left: 50%;
    top: 10px;
    color: $red;
  }
}
</style>
