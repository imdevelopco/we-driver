<template>
    <div class="divlogin">
    <div class="container">
      <div class="contenido">
        <figure id="logotipo">
          <img class="img" :src="LoginLogo" width="200">
        </figure>
        <h2>Sign Up</h2>
        <form @submit.prevent="sendForm">
          <input 
            type="text" 
            placeholder="Your name"
            v-model="form.name"
        />
          <input
            type="email"
            :class="{ error: validaEmail }"
            placeholder="Email"
            v-model="form.email"
          />
          <input
            type="password"
            :class="{ error: validaPassword }"
            placeholder="password"
            v-model="form.password"
          />
          <input
            type="password"
            :class="{ error: verificaPaswordIguales }"
            placeholder="confirm password"
            v-model="form.password2"
          />
          <button>Sign up</button>
          <p>By sign up you agree to our <br> Terms & Conditions</p> 
        </form>

        <router-link to="../login" style="font-size: 18px; color: black;">Cancel</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        LoginLogo: {
        type: String,
        default: require("@/assets/img/logo.jpg")
        }
    },

  data: function() {
    return {
      form: {
        name:"",
        email: "",
        password: "",
        password2: ""
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
      if (
        !this.validaEmail &&
        !this.validaPassword &&
        !this.verificaPaswordIguales
      ) {
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
    verificaPaswordIguales() {
      if (this.form.password == this.form.password2) {
        return false;
      } else {
        return true;
      }
    },
  }
}
</script>

<style scoped>
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
}

.divlogin .container .contenido h2 {
  margin-top: 0px;
  margin-bottom: 20px;
  color: red;
  font-size: 2em;
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
  padding: 10px;
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

.divlogin .container .contenido router-link {
    color: red;
    font-size: 32px;
}

</style>