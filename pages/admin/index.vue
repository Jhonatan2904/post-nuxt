<template>
  <div>
    <section class="container my-4">
      <div class="">
        <button class="btn btn-secondary btn-sm mb-3" @click="logOut">Cerrar Sesión</button>
      </div>
      <div class="d-flex justify-content-between">
        <h1>Existing Post</h1>
        <button class="btn btn-primary" @click="$router.push('/admin/newPost')">New Post</button>
      </div>
    </section>
    <section>
      <PostList isAdmin :posts="objectPost" />
    </section>
  </div>
</template>

<script>
import PostList from '~/components/post/PostList'
  export default {
    middleware: ['check-auth','log'],
    components: {
      PostList
    },
    computed:{
      objectPost(){
        return this.$store.getters.getPosts
      }
    },

    methods: {
      logOut(){
        this.$store.dispatch('logOut')
        this.$router.push('/admin/auth')
      }
    }
  }
</script>

<style scoped>

</style>
