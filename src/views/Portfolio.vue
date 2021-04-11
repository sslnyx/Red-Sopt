<template>
  <div>
    <div style="position:absolute;">{{ this.$route.name }}</div>
    <!-- <div v-for="project in projectsContent" :key="project.id">
      <h1>{{ project.title.rendered }}</h1>
    </div> -->

    <PortfolioSlides :projectsContent="projectsContent" />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import PortfolioSlides from '@/components/PortfolioSlides.vue'
export default {
  name: 'Porfolio',
  data () {
    return {
      // ProperPageContent: {}
    }
  },
  computed: {
    // ...mapGetters(this.$route.name)

    getAllProjects () {
      return this.$store.getters[this.$route.name]
    },

    projectsContent () {
      // console.log(':kkd')
      return this.getProjects()
    }
  },
  methods: {
    renameLocale () {
      this.$i18n.locale === 'en'
        ? (this.locale = 'en_US')
        : (this.locale = 'zh_TW')
    },
    getProjects () {
      const ProperPageContent = {}

      this.renameLocale()

      this.getAllProjects.forEach((element, i) => {
        if (element.polylang_current_lang === this.locale) {
          ProperPageContent[i] = element
        }
      })
      return ProperPageContent
    }
  },
  components: {
    PortfolioSlides
  }
}
</script>

<style>
</style>
