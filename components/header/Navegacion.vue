<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">NUXT JS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto nav-tabs">
            <nuxt-link to="/" tag="li" class="nav-item">
              <a class="nav-link">Home</a>
            </nuxt-link>
            <nuxt-link to="/post" tag="li" class="nav-item">
              <a class="nav-link">Blog</a>
            </nuxt-link>
            <nuxt-link to="/admin" tag="li" class="nav-item">
              <a class="nav-link">Administrador</a>
            </nuxt-link>
            <nuxt-link to="/about" tag="li" class="nav-item">
              <a class="nav-link">About</a>
            </nuxt-link>
            <nuxt-link to="/api" tag="li" class="nav-item">
              <a class="nav-link">Api</a>
            </nuxt-link>
            <nuxt-link to="/prueba" tag="li" class="nav-item">
              <a class="nav-link">Recaptcha</a>
            </nuxt-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
      data(){
        return {

        }
      }
  }
</script>

<style scoped>

</style>
