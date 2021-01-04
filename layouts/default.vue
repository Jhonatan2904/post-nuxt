<template>
  <div>
    <Navegacion />
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navegacion from '@/components/header/Navegacion'
export default {
  // middleware:'log' ,
  components: {
    Navegacion
  }
}
</script>

<style>
html{
  font-family: 'Baloo Tammudu 2', cursive;
  font-family: 'Ranchers', cursive;

}
body{
  margin: 0;
}
</style>
