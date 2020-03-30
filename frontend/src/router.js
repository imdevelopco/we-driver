import VueRouter from "vue-router";
import routes from "./routes/routes";

// coonfiguracion del router
const router = new VueRouter({
    mode: 'history',
    routes, // short for routes: routes
    linkExactActiveClass: "nav-item active"
  });
  
  router.beforeEach((to, from, next) => {

    let user = {name:"camilo",admin:false} //usuario logueado
    let pageProtected = to.matched.some(record => record.meta.userLoged),
        welcomePage = to.matched.some( record => record.meta.welcomePage),
        adminPage = to.matched.some( record => record.meta.admin);
    
    if(!pageProtected && !user ){ //si no es una pagina protegida y no esta logueado
        next()
    }
    else if(pageProtected && !user ){ //si es una pagina protegida y no esta logueado, lo envia a la pagina de login 
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
        console.log('[debug] adminPage: ',adminPage)
        console.log('[debug] user.admin: ',user.admin)
        if(adminPage && user.admin == false){ //si es una pagina de adinitracion y el usuario no es admin
        console.log('[debug] No puedes entrar')
            next('/app/maps')   
        }
        else if(adminPage && user.admin){ //si es una pagina de adinitracion y el usuario es admin
        console.log('[debug] puedes entrar')
            next()   
        }
        else{
            console.log('[DEBUG] hola que hace vengo de:',from.path)
            console.log('[DEBUG] voy para:',to.path)
            next()
        }
    }
  })

  export default router