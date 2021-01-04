<template>
  <div style="width: 100%;
  margin: 30px auto;">
    <VueRecaptcha sitekey="6Le7L9gZAAAAAHDmPjoPuuGC34hyXL4bZj638O5Z"/>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
  export default {
    components: {
      VueRecaptcha
    }
  }
</script>

<style scoped>
</style>
