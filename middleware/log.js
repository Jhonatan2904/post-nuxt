// export default function(context){
//   // console.log(context)
//   console.log('Middleware is running...')
// }

export default function(context){
  if(!context.store.getters.isAuthenticate){
    console.log("Just auth...")
    context.redirect('/admin/auth')
  }
}
