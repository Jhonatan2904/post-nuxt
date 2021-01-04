export default function(context){
    // console.log(context.req)
    console.log("Auth init...")
    context.store.dispatch('initAuth', context.req)
}
