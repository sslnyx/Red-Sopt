<template>
  <div class="single-project">
    <section id="project-hero" class="project-hero">
      <img :src="projectContent.acf.project_hero.url" alt="" />
    </section>
    <section class="title">
      <h1 v-html="projectContent.title.rendered"></h1>
    </section>
    <section v-for="i in 2" :key="i">
      <div
        v-if="projectContent.acf[`section_${i}`].description"
        class="description"
      >
        <div v-html="projectContent.acf[`section_${i}`].description"></div>
      </div>

      <div class="content">
        <b-row
          v-if="
            projectContent.acf[`section_${i}`].two_images.image_left.url !=
              null &&
            projectContent.acf[`section_${i}`].two_images.image_right.url !=
              null
          "
        >
          <b-col cols="6">
            <img
              :src="
                projectContent.acf[`section_${i}`].two_images.image_left.url
              "
            />
          </b-col>
          <b-col cols="6">
            <img
              :src="
                projectContent.acf[`section_${i}`].two_images.image_right.url
              "
            />
          </b-col>
        </b-row>
        <b-row v-if="projectContent.acf[`section_${i}`].single_image_1">
          <b-col>
            <img :src="projectContent.acf[`section_${i}`].single_image_1" />
          </b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SingleProject',
  computed: {
    ...mapGetters(['getProject', 'getProjectTw']),

    projectContent () {
      const id = Number(this.$route.params.project)
      if (this.getProject(id)) return this.getProject(id)
      return this.getProjectTw(id)
    }
  }
}
</script>

<style lang="scss">
section {
  background: #fff;
}
.single-project {
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .title {
    margin-top: 100vh;
    h1 {
      padding: 100px 22px;
      font-size: 4rem;
      padding-bottom: 0;
      margin: 0;
      // margin-bottom: -1px;
    }
  }
  .description {
    padding: 100px 22px;
    max-width: 475px;
    font-size: 1.25rem;
    p:last-child {
      margin: 0;
    }
  }
  .project-hero {
    img {
      position: fixed;
      top: 0;
      z-index: -1;
      width: 100vw;
      object-fit: cover;
      height: 100vh;
    }
  }
  .row {
    position: relative;
    max-height: 400px;
    overflow: hidden;
    [class*="col"] {
      padding: 0;
      max-height: 400px;
    }
  }

  @media (min-width: 768px) {
    .title {
      h1 {
        padding: 100px;
        padding-bottom: 0;
      }
    }
    .description {
      padding: 100px;
    }
  }
}
</style>
