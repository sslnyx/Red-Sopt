<template>
  <div class="locale-switcher">
    <div
      class="switch-btn"
      v-for="(locale, i) in locales"
      :key="locale"
      @click="switchLocale(locale)"
    >
      <transition @enter="enter">
        <span ref="langText" v-if="$i18n.locale !== locale">
          {{ lang[i] }}
        </span>
      </transition>
    </div>
  </div>

  <!-- <div class="local-btn" @click="switchLocale(targetLang)">
    {{ targetLang }}
  </div> -->
</template>

<script>
export default {
  name: 'LocaleSwitcher',

  data () {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
      lang: ['ENG', '中文']
    }
  },
  methods: {
    switchLocale (locale) {
      if (this.$i18n.locale !== 'us') {
        this.$i18n.locale = locale

        const getHTMLTag = document.documentElement
        getHTMLTag.setAttribute('lang', this.$i18n.locale)
      }
    },

    bEnter () {
      this.$anime({
        targets: this.$refs.langText,
        translateY: 0
      })
    },

    enter () {
      this.$anime({
        targets: this.$refs.langText,
        translateY: [10, 0],
        opacity: [0, 1],
        easing: 'easeOutSine',
        duration: 500
      })
    },

    leave () {
      this.$anime({
        targets: this.$refs.langText,
        translateY: [0, -10],
        opacity: [1, 0]
      })
    }

    // switchLocale (targetLang) {
    //   if (targetLang === 'ENG') {
    //     this.$i18n.locale = 'us'
    //   } else {
    //     this.$i18n.locale = 'zh'
    //   }
    // }
  },
  computed: {
    targetLang () {
      if (this.$i18n.locale === 'us') {
        return this.lang[0]
      } else {
        return this.lang[1]
      }
    }
  }
}
</script>

<style lang="scss">
.locale-switcher {
  top: 35px;
  left: 0x;
  position: fixed;
  z-index: 100;
  &:hover {
    .switch-btn {
      background: lighten($color: #94362f, $amount: 10%);
    }
  }
}
.switch-btn {
  position: absolute;
  transition: all 0.5s ease;
  cursor: pointer;
  height: 45px;
  width: 80px;
  // border-radius: 50%;
  background: $red;
  border: 1px solid $red;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #fff;
    padding: 1rem;
    position: relative;
    z-index: 10;
  }
}
</style>
