<template>
  <div>
    <div class="text-center">
      <nuxt-link :to="postLink" style="text-decoration: none">
        <div class="img" :style="{backgroundImage: 'url(' + img + ')'}">
        </div>
        <div class="card-body card-hover">
          <h4>{{title}}</h4>
          <p>{{ text }}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },

      title: {
        type: String,
        required: true
      },

      text: {
        type: String,
        required: true
      },

      img :{
        type: String,
        required: true
      },
      isAdmin: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      postLink(){
        return this.isAdmin ? '/admin/' + this.id : '/post/' + this.id
        // console.log(this.isAdmin)
      }
    }
  }
</script>

<style scoped>
.card-hover:hover{
  background: darkgray;
  color: white;
}

.img{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}
</style>
