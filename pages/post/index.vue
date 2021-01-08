<template>
    <div>
      <PostList :posts="getPosts" :isAdmin="false" />
    </div>
</template>

<script>
import Axios from 'axios'
 import PostList from '~/components/post/PostList'
export default {
  // fetch(context) {

  //   return new Promise((resolve, reject)=>{
  //     console.log('Callback')
  //     setTimeout(()=>{
  //       resolve({
  //         objectPost: [
  //             {id: 1, title: 'First Post', text: 'Descripción del primer post', img:'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg'},
  //             {id: 2, title: 'Second Post', text: 'Descripción del segundo post', img:'https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ'}
  //         ]
  //       })
  //     }, 1000)
  //     // reject(new Error())
  //   })
  //   .then(data => {
  //     // context.store.dispatch('loadPost', data.objectPost)
  //     return data
  //   })
  //   .catch(e => {
  //     return context.error(new Error())
  //   })

  // },

  asyncData(context) {
    if(context.payload){
      return {
        objectPost: postData
      }
    }
    return Axios.get('https://nuxt-js-b3202.firebaseio.com/posts.json')
    .then(data => {
      return {
        objectPost: data.data
      }
    }).catch()
  },
  computed: {
    getPosts(){
      return this.$store.getters.getPosts
    }
  },

  // created(){
  //   return this.$store.getters.getPosts
  // },
  // created(){
  //   // console.log(this.objectPost)
  //   this.$store.dispatch('loadPost', this.objectPost)
  //   // console.log(this.$store.getters.getPosts )
  // },
  components: {
    PostList
  }
}
</script>

<style scoped>

</style>
