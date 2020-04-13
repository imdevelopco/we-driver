import VueRouter from "vue-router";
import routes from "./routes/routes";

// coonfiguracion del router
const router = new VueRouter({
    mode: 'history',
    routes, // short for routes: routes
    linkExactActiveClass: "nav-item active"
  });
  
  router.beforeEach((to, from, next) => {

    let user = {name:"camilo",admin:true} //usuario logueado
    let pageProtected = to.matched.some(record => record.meta.userLoged),
        welcomePage = to.matched.some( record => record.meta.welcomePage),
        adminPage = to.matched.some( record => record.meta.admin);
    
    if(!pageProtected && !user ){ //si no es una pagina protegida y no esta logueado
        next()
    }
    else if(pageProtected && user ){ //si es una pagina protegida y no esta logueado, lo envia a la pagina de login 
        next('/login')
    }
    else if(!pageProtected && user){ //si no es una pagina protegida y esta logueado (evita que entre a la pagina login)
        if(welcomePage){ //si es el home, si se le permite visitarla
            next()
        }else{
            next('/app/maps')
        }
    }
    else if(pageProtected && user){ //si es una pagina protegida y esta logueado
        if(adminPage && user.admin == false){ //si es una pagina de adinitracion y el usuario no es admin
            next('/app/maps')   
        }
        else if(adminPage && user.admin){ //si es una pagina de adinitracion y el usuario es admin
            next()   
        }
        else{
            next()
        }
    }
  })

  export default router