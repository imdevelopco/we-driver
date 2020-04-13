<template>
  <div class="divlogin">    
    <div class="container">
      <div class="contenido">
        <figure id="logotipo">
          <img class="img" :src="LoginLogo" width="200">
        </figure>
        <h2 v-if="form.type == 0">Iniciar sesión</h2>
        <p v-if="form.type == 1">Escriba el correo asociado a su cuenta para recuperar su contraseña.</p>
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
        <router-link to="../registro" style="font-size: 18px; color: black;" v-if="form.type == 0">Registrarse</router-link>
        <a
          href="javascript:void(0)"
          @click="form.type = 0"
          v-if="form.type == 1"
          style="font-size: 18px; color: black;"
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

html,body {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  /*color: #333333;*/
}

.divlogin {
  background: url('../../assets/img/fondo_transparente.jpg');
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
  background: rgba(255, 255, 255, 1);
  padding: 20px;
  display: inline-block;
  margin-left: auto;
  font-weight: bold;
}

.divlogin .container .contenido h2 {
  margin-top: 0px;
  margin-bottom: 20px;
  color: red;
  font-size: 2em;
  font-weight: bold;
}

.divlogin .container .contenido input {
  height: 30px;
  margin: 0px;
  margin-bottom: 20px;
  border: 2px solid #acacac;
  padding: 10px;
  width: 70%;
}

.divlogin .container .contenido input.error {
  border-bottom: 3px solid red;
}

.divlogin .container .contenido button {
  height: 50px;
  margin: 10px;  
  border: 0px;
  width: 80%;
  background: red;
  color: #ffffff;
  font-size: 18px;
  border-radius: 5px;
}

.divlogin .container .contenido a {
  margin: 10px;
  font-size: 12px;
  color: #333333;
  text-decoration: none;
  display: block;
}

#logotipo {
  margin: 0px;
}
</style>
