<template>
  <div>
    ID: {{ this.$route.params.id }}
    <!-- Información: {{ this.episodio }} -->
    <h5>Epidodios: </h5>
    <div v-for="(item, index) in episodio" :key="index">
      <a href="">{{item}}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return  {
        episodio: null
      }
    },
    mounted(){
      // console.log('https://rickandmortyapi.com/api/episode/' + this.$route.params.id)
      return axios.get('https://rickandmortyapi.com/api/episode/' + this.$route.params.id)
      .then(response => {
          this.episodio = response.data.characters
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
