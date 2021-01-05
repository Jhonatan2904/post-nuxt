<template>
  <div>
    <Header />
    <PostList :posts="objectPost"/>
  </div>
</template>

<script>
import PostList from '~/components/post/PostList'
export default {
  // middleware: 'log',
  // asyncData(context) {
    // console.log(context)
    //     setTimeout(() => {
    //       callback(null, {
    //         objectPost: [
    //         {id: 1, title: 'First Post', text: 'Descripción del primer post', img:'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg'},
    //         {id: 2, title: 'Second Post', text: 'Descripción del segundo post', img:'https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ'}
    //     ]
    //       })
    //     }, 2000);
  //   return new Promise((resolve, reject)=> {
  //     setTimeout(() => {
  //       resolve({
  //          objectPost: [
  //           {id: 1, title: 'First Post', text: 'Descripción del primer post', img:'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg'},
  //           {id: 2, title: 'Second Post', text: 'Descripción del segundo post', img:'https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ'}
  //       ]
  //       })
  //     }, 3000);
  //   })
  //   .then(data => {
  //     return data
  //   })
  //   .catch(e => {
  //     return context.error(new Error())
  //   })
  // },

  mounted(){
    console.log("Probando OneSignal...");
    window.$OneSignal = window.$OneSignal || []
    console.log(window.$OneSignal)
    console.log(this.$OneSignal)
    this.$OneSignal.push(() => {
      this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
        if (isEnabled) {
          console.log("Push Notifications is actived.");
        } else {
          console.log("Push Notifications is not actived.");
        }
      })
    })
  },

  computed: {
    objectPost(){
      return this.$store.getters.getPosts
    }
  },
  // data(){
  //   return {
  //     objectPost: []
  //   }
  // },
  components: {
    PostList,
  },
}
</script>
<style>

</style>
