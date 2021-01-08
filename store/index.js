import Vuex from "vuex"
import axios from "axios"
import Cookie from 'js-cookie'

const crearStore = ()=> {
  return new Vuex.Store({
    state: {
      loadPost: null,
      token: null
    },

    mutations: {
      loadPost(state, data){
        state.loadPost = data
      },

      addPost(state, data){
        state.loadPost.push(data)
      },
      editedPost(state, dataEdited){
        const index = state.loadPost.findIndex(
          elem => elem.id === dataEdited.id
        )

        state.loadPost[index] = dataEdited
      },

      setToken(state, data){
        state.token = data
      },

      clearToken(state){
        state.token = null
      }

    },

    actions: {
      nuxtServerInit({commit}, context){
          // cargar los datos desde firebase
          return axios.get(process.env.baseUrl + '/posts.json')
          .then(response => {
            const arrPosts = []
            for(let key in response.data){
              arrPosts.push({ ...response.data[key] , id:key })
            }
            commit('loadPost', arrPosts)
            // console.log(arrPosts)
          })
          .catch(e => context.error(e))
      },
      
      loadPost(vuexStore, data){
        vuexStore.commit('loadPost', data)
      },

      addPost({commit, state}, data){
        const sendData = {
          ...data,
          updated: new Date()
        }
        return axios.post('https://nuxt-js-b3202.firebaseio.com/posts.json?auth=' + state.token , sendData)
        .then(response => {
          // console.log(response)
          commit('addPost', {...sendData, id: response.data.name})
          })
        .catch(e => console.log(e))
      },

      editedPost({commit, state}, dataEdited){
        return axios.put('https://nuxt-js-b3202.firebaseio.com/posts/' + dataEdited.id + '.json?auth=' + state.token , {...dataEdited, updated: new Date()})
        .then(response => {
          // console.log(response)
          commit('editedPost', dataEdited)
        })
        .catch(e => console.log(e))
      },

      authenticate({commit, dispatch}, data){
        var urlDefault
        if(data.isLogin){
          urlDefault = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.urlAPI
        } else {
            urlDefault = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ process.env.urlAPI
        }
        // if(!data.isLogin){
          // sign up
          // console.log(urlDefault)
          this.$axios.$post(urlDefault, {
            email: data.email,
            password: data.password,
            returnSecureToken: true
          })
          .then(response => {
            // console.log(response)
            commit('setToken', response.idToken)
            localStorage.setItem('token', response.idToken)
            localStorage.setItem('tokenExpiration', new Date().getTime() +  Number.parseInt(response.expiresIn) * 1000)
            // console.log(response)
            Cookie.set('token', response.idToken)
            Cookie.set('tokenExpiration', new Date().getTime() +  Number.parseInt(response.expiresIn) * 1000)
            this.$router.push('/admin')

          }).catch(e => console.log(e))

      },


      initAuth({commit, dispatch}, req){
        let tokenLocal
        let expirationLocal
        if(req){
          // console.log("HOLA")
          // console.log("=>", req.headers.cookie)
          if(!req.headers.cookie){
            return
          }
          // console.log("=>" , req.headers.cookie)
          tokenLocal = req.headers.cookie.split(";").find(el => el.trim().startsWith('token')).split("=")[1]

          expirationLocal = req.headers.cookie.split(";").find(el => el.trim().startsWith('tokenExpiration')).split("=")[1]

        } else if(process.client) {
          tokenLocal = localStorage.getItem('token')
          expirationLocal = localStorage.getItem('tokenExpiration')
        }
        if(new Date().getTime() > +expirationLocal || !tokenLocal){
          dispatch('logOut')
          return
        }
        commit('setToken', tokenLocal)
      },

      logOut({commit}){
        commit('clearToken')
        Cookie.remove('token')
        Cookie.remove('tokenExpiration')
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')
      }

    },

    getters: {
      getPosts(state){
        return state.loadPost
      },

      isAuthenticate(state){
        return state.token !== null
      }
    }
  })
}

export default crearStore
