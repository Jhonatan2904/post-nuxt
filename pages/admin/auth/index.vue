<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 mx-auto my-4">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Login</h2>
          </div>
          <div class="card-body">
            <form >
              <div class="form-group">
                <label>Usuario:</label>
                <input type="text" class="form-control" v-model="email">
              </div>
              <div class="form-group">
                <label>Password:</label>
                <input type="password" class="form-control" v-model="password">
              </div>
              <div class="form-group">
                <AppButton type="submit" @click.prevent="sendLog">{{isLogin ? 'Sign In' : 'Sign Up' }}</AppButton>
                <AppButton
                  type="button"
                  btn-Style="inverted"
                  style="margin-left: 10px"
                  @click="isLogin = !isLogin"
                >Switch to {{isLogin ? 'Sign Up' : 'Sign In'}}</AppButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/UI/AppButton'
  export default {
    data(){
      return {
        isLogin: false,
        email: '',
        password: ''
      }
    },
    components: {
      AppButton
    },
    methods:{
      sendLog(){
        this.$store.dispatch('authenticate', {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password
        })
      }
    }
  }
</script>

<style scoped>

</style>
