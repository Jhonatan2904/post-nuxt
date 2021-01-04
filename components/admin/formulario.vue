<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 mx-auto">
        <div class="card">
          <form>
            <AppInputs v-model="editedPost.author">Autor Name:</AppInputs>
            <AppInputs v-model="editedPost.title">Title:</AppInputs>
            <AppInputs v-model="editedPost.img">Img:</AppInputs>
            <AppInputs
              control-type= "textarea"
              v-model="editedPost.content">Descripción: </AppInputs>
              <AppInputs
              control-type= "textarea"
              v-model="editedPost.text">Texto: </AppInputs>
            <AppButton type="submit" @click.prevent="onSave">Save</AppButton>
            <AppButton type="button" style="margin-left: 10px" btn-style="cancel"
            @click="onCancel"
            >Cancel</AppButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppButton from '~/components/UI/AppButton';
  import AppInputs from '~/components/UI/AppInputs';

  export default {
    props: {
      post: {
        type: Object,
        required: false
      }
    },
    data(){
      return {
        editedPost: this.post ? {...this.post} : {
          author: "",
          title: "",
          img: "",
          content: "",
          text: ""
        }
      }
    },

      components: {
        AppButton,
        AppInputs
      },
      methods: {
        onCancel(){
          this.$router.push('/admin')
        },

        onSave(){
          this.$emit('submit', this.editedPost)
          // console.log('Enviando...')
        }
      },
  }
</script>
