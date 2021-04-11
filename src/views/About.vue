<template>
  <div class="about">
    <p>{{ $t("about.message") }}</p>

  </div>
</template>

<script>

export default {
  mounted () {
    console.log(this.$i18n.locale)
  }
}
</script>

<style>
</style>
