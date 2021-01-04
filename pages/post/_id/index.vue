<template>
  <div class="single-post-page">
    <section>
      <h1 class="post-title">{{ objectPost.title }}</h1>
      <div class="post-details">
        <div>Last update on: {{objectPost.updated | date}} - </div>
        <div> &nbsp;Writen by {{objectPost.author}}</div>
      </div>
      <p>{{objectPost.text}}</p>
    </section>
    <section class="post-feedback">
      Send email to: <a href="#">Correo</a>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    asyncData(context) {
      // setTimeout(() => {
      //   callback(null, {
      //     objectPost:
      //       {id: 1,
      //       title: "First Post (ID: "+ context.route.params.id + " )",
      //       updated: new Date(),
      //       author: "Jhonatan Castillo",
      //       text: "Descripción del primer post"
      //       }
      //   })
      // }, 4000);
      // console.log(context.params.id)
      return axios.get('https://nuxt-js-b3202.firebaseio.com/posts/' + context.params.id + '.json')
      .then(response => {
          // console.log(response.data)
          return {
            objectPost: response.data
          }
      })
      .catch(e => context.error(e))
    },
  }
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
