<template>
  <div>
    <Formulario @submit="saveData" />
  </div>
</template>

<script>
  import Formulario from '~/components/admin/formulario';
  import axios from 'axios'
  export default {
    middleware: ['check-auth','log'],
      components: {
        Formulario
      },
      methods: {
        saveData(data){
         this.$store.dispatch('addPost', data)
         .then(response => {
           this.$router.push('/admin')
         })
        }
      },
  }
</script>

<style scoped>

</style>
