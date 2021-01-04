<template>
  <div>
    <Formulario :post="loadedPost" @submit="saveDateEdit" />
  </div>
</template>

<script>
import Axios from 'axios'
import Formulario from '~/components/admin/formulario'
  export default {
    middleware: ['check-auth','log'],
    asyncData(context) {

      // console.log(context.params.idPost)
      return Axios.get('https://nuxt-js-b3202.firebaseio.com/posts/' + context.params.idPost + '.json')
      .then(response => {
        console.log('https://nuxt-js-b3202.firebaseio.com/posts/' + context.params.idPost + '.json')
        return {
          loadedPost: {...response.data, id: context.params.idPost}
        }
      })
      .catch(e => console.log(e))
    },

  components: {
    Formulario
  },

  methods: {
    saveDateEdit(data){
      // console.log(data)
     this.$store.dispatch('editedPost', data)
     .then(response => {
          this.$router.push('/admin')
     })
     .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
