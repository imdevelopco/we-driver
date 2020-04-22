<template>
  <div  class="divlogin">
    <div class="container">
      <div class="contenido">
        <figure id="logotipo">
          <img class="img" :src="LoginLogo" width="200" />
        </figure>

        <h2 v-if="form.type == 0">Iniciar sesión</h2>
        <p v-if="form.type == 1" style="font-size: 16px; color: #333;">
          Escriba el correo asociado a su cuenta para recuperar su contraseña.</p>
        <form @submit.prevent="login">

          <input
            type="email"
            :class="{ error: validaEmail }"
            placeholder="Email"
            v-model="form.email"
          />
          <input
            type="password"
            v-if="form.type != 1"
            :class="{ error: validaPassword }"
            placeholder="Contraseña"
            v-model="form.password"
          />

          <button>Aceptar</button>

        </form>
          <!-- Botón de ingreso con cuenta de Google -->
          <g-signin-button class="btnGoogle"    
            :params="googleSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError">
            Ingresa con Google
          </g-signin-button>    

        <a
          href="javascript:void(0)"
          @click="form.type = 1"
          v-if="form.type == 0"

        >Olvidó su contraseña?</a>

        <router-link to="../registro" 
        class="link" 
        v-if="form.type == 0">
        Registrarse
        </router-link>
        
        <a class="cancelLink"

          href="javascript:void(0)"
          @click="form.type = 0"
          v-if="form.type == 1"
        >Cancelar</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        LoginLogo: {
        type: String,
        default: require("@/assets/img/weDrive.png")
        }
    },

  data: function() {
    return {
      form: {
        type: 0, //0 = login, 1 = recuperar contraseña
        email: "",
        password: ""
      },
      objetoEstilo: {
        color: 'red'
      },
      googleSignInParams: this.$store.getters.getGoogleSignInParams
    };
  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      console.log(profile);
      
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },
    /* Validacion del usuario en la BD*/
    login(){
          this.$store.dispatch('retrieveToken',{
                username: this.form.email,
                password: this.form.password
                
              }).then(response => {
                this.$router.push('/')
              }).catch(error => {
                console.log(error);
              })             
    },
    sendForm() {
      if (this.validaType()) {
        console.log(this.form);
      }
    },
    validaType() {
      if (this.form.type == 0 && !this.validaEmail && !this.validaPassword) {
        return true;
      } else if (this.form.type == 1 && !this.validaEmail) {
        return true;
      } else {
        return false;
      }
    }
  },
  computed: {
    
    validaEmail() {
      var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (exp.test(this.form.email)) {
        return false;
      } else {
        return true;
      }
    },
    validaPassword() {
      var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
      if (exp.test(this.form.password)) {
        return false;
      } else {
        return true;
      }
    },
    title() {
      return this.form.type == 0
        ? "Iniciar sesión"
        : "Reinicio de contraseña";
    }
  }
};
</script>

<style scoped>
html,
body {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  /*color: #333333;*/
}

.divlogin {
  background: url("../../assets/img/fondo_transparente.jpg");
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
}

.divlogin .container {
  text-align: center;
  margin: auto;
}

.divlogin .container .contenido {
  width: 100%;
  max-width: 300px;
  background: rgba(255, 255, 255, .9); 
  padding: 0 20px 20px 20px;
  display: inline-block;
  font-weight: bold;
  border-radius: 20px;
}

.divlogin .container .contenido h2 {
  margin: 5px;
  color: black;
  font-size: 2em;
  font-weight: bold;
}

.divlogin .container .contenido input {
  height: 38px;
  margin: 8px 0px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, .4);
  padding: 10px;
  width: 80%;
}

.divlogin .container .contenido input:hover {
  background: rgba(255, 255, 255, 1);
}

.divlogin .container .contenido input.error {
  border-bottom: 3px solid red;
}

.divlogin .container .contenido button {
  height: 40px;
  margin: 8px 0px;  
  border: 0px;
  width: 80%;
  background: rgb(85, 85, 85, .8);
  color: #ffffff;
  font-size: 15px;
  border-radius: 5px;
}

.divlogin .container .contenido .btnGoogle{
  height: 40px;
  margin: 8px 0px 0px 25px;
  padding-top: 8px;
  width: 80%;
  background: rgb(85, 85, 85, .8);
  color: #ffffff;
  font-weight: normal;
  font-family: Arial;
  font-size: 15px;
  border-radius: 5px;
}

.divlogin .container .contenido button:hover {
  background: red;
  cursor: pointer;
}

.divlogin .container .contenido .btnGoogle:hover {
  background: red;
  cursor: pointer;
}

.divlogin .container .contenido a {
  margin: 10px;
  font-size: 13px;
  color: #333333;
  text-decoration: none;
  display: block;
}
.divlogin .container .contenido a:hover{
  font-size: 14px;
}

.divlogin .container .contenido .link {
  color: black;
  font-size: 16px;
}

.divlogin .container .contenido .link:hover {
  color: yellow;
  font-size: 20px;
}

.divlogin .container .contenido .cancelLink {
  color: black;
  font-size: 18px;
}

.divlogin .container .contenido .cancelLink:hover {
  color: yellow;
  font-size: 20px;
}

#logotipo {
  margin: 0px;
}

.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
