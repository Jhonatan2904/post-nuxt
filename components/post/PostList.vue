<template>
<div class="container">
  <div class="row justify-content-center m-2">
    <div class="col-12 col-sm-6 col-md-4 m-1" v-for="post in posts"  :key="post.id">
      <div class="card">
          <PreviewPost
          :id="post.id"
          :is-admin="isAdmin"
          :title="post.title"
          :text="post.text"
          :img="post.img" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PreviewPost from '~/components/post/PreviewPost'
  export default {
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      },
      posts: {
        type: Array,
        required: true
      }
    },
    components: {
      PreviewPost
    }
  }
</script>

<style scoped>

</style>
