<template>
  <div>
    <div v-for="dato in objectData" :key="dato.id">
      <nuxt-link :to="'api/' + dato.episode + '/' + dato.id">
        {{ dato.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    asyncData(context) {
      return axios.get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        return {
          objectData: response.data.results
        }
      }).catch(error => console.log(error))
    },
  }
</script>

<style lang="scss" scoped>

</style>
