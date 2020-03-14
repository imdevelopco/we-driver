import VueRouter from "vue-router";
import routes from "./routes/routes";

// coonfiguracion del router
const router = new VueRouter({
    mode: 'history',
    routes, // short for routes: routes
    linkExactActiveClass: "nav-item active"
  });
  
  router.beforeEach((to, from, next) => {

    let user = {name:"camilo"} //usuario logueado
    let pageProtected = to.matched.some(record => record.meta.userLoged),
        welcomePage = to.matched.some( record => record.meta.welcomePage)

    if(pageProtected && !user ){ //si es una pagina protegida y no esta logueado, lo envia a la pagina de login 
        next('/login')
    }
    else if(!pageProtected && user){ //si no es una pagina protegida y esta logueado (evita que entre a la pagina login)
        if(welcomePage){ //si es el home, si se le permite visitarla
            next()
        }else{
            next('/app/maps')
        }
    }
    else{
        next()
    }
  })

  export default router