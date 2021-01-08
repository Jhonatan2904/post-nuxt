<template>
    <div>
        <div class="single-post-page text-center">
            <h1 class="post-title">{{ objectPost.title }}</h1>
            <div class="post-details">
                <div>Last update on: {{objectPost.updated | date}}</div>
                <div> &nbsp;Writen by {{objectPost.author}}</div>
            </div>
            <p>{{objectPost.text}}</p>

            <section class="post-feedback">
            Send email to: <a href="#">Correo</a>
            </section>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
            return axios.get('https://nuxt-js-b3202.firebaseio.com/posts/' + params.idPost + '.json')
                .then(response => {
                    console.log(response.data)
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

