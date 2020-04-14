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
        <form @submit.prevent="sendForm">

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
          <button v-if="form.type == 0">Iniciar sesión con Google</button>

        </form>

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
      }

    };
  },
  methods: {
    /* Validacion del usuario en la BD*/
    findUser(){
   /*    let datos = {
        username: this.form.email,
        password: this.form.password
      };
      let url = 'http://localhost:8000/api/login';
    */ 
   this.$store.dispatch('retrieveToken',{
        username: this.form.email,
        password: this.form.password
      }).then(response => {
        this.$router.push('/');
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
  background: rgba(110, 110, 110, .5);
  padding: 0 20px 20px 20px;
  display: inline-block;
  margin-left: auto;
  font-weight: bold;
  border-radius: 5px;
}

.divlogin .container .contenido h2 {
  margin-top: 0px;
  margin-bottom: 20px;
  color: black;
  font-size: 2em;
  font-weight: bold;
}

.divlogin .container .contenido input {
  height: 30px;
  margin: 0px;
  margin-bottom: 20px;
  border: 2px solid rgba(255, 255, 255, 0.0);
  padding: 10px;
  width: 70%;
  background:rgba(255, 255, 255, 0.6);
}

.divlogin .container .contenido input:hover {

  background: rgba(255, 255, 255, 1);

}

.divlogin .container .contenido input.error {
  border-bottom: 3px solid red;
}

.divlogin .container .contenido button {
  height: 50px;
  margin: 10px;  
  border: 0px;
  width: 80%;
  background: rgb(85, 85, 85);
  color: #ffffff;
  font-size: 18px;
  border-radius: 5px;
}

.divlogin .container .contenido button:hover {

  background: red;

}

.divlogin .container .contenido a {
  margin: 10px;
  font-size: 12px;
  color: #333333;
  text-decoration: none;
  display: block;
}
.divlogin .container .contenido a:hover{
  font-size: 14px;
}

.divlogin .container .contenido .link {
  color: black;
  font-size: 18px;
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
</style>
