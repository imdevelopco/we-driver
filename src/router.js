import VueRouter from "vue-router";
import routes from "./routes/routes";

// coonfiguracion del router
const router = new VueRouter({
    mode: 'history',
    routes, // short for routes: routes
    linkExactActiveClass: "nav-item active"
  });
  
  router.beforeEach((to, from, next) => {
      console.log("I am here", to, from)
    let user = {name:"camilo"} //usuario logueado, si no esta logueado esto sera null o un objeto vacio, no se
    let pageProtected = to.matched.some(record => record.meta.userLoged)
    console.log("pageProtected", pageProtected)
    console.log("user", user)
    if(pageProtected && !user ){ //si es una pagina protegida y no esta logueado
        console.log("a login")
        next('login')
    }
    else if(!pageProtected && user){
        console.log("a app")
        next('app')
    }
    else{
        next()
    }
  })

  export default router