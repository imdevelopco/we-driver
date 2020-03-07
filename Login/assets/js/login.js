new Vue({
    el:".divlogin",
    data:{
        form:{
            type:0, //0 = login, 1 = registro, 2 = recuperar contraseña
            email:"",
            password:"",
            password2:""
        }
    },
    methods:{
        sendForm(){
            if(this.validaType()){
                console.log(this.form);
            }            
        },
        validaType(){
            if(this.form.type==0 && !this.validaEmail && !this.validaPassword){
                return true;
            }else if(this.form.type==1 && !this.validaEmail && !this.verificaPaswordIguales){
                return true;
            }else if(this.form.type==2 && !this.validaEmail){
                return true;
            }else {
                return false;
            }
        }
    },
    computed:{
        validaEmail(){
            var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(exp.test(this.form.email)){
                return false;
            } else{
                return true;
            }
        },
        validaPassword(){
            var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
            if(exp.test(this.form.password)){
                return false;
            } else{
                return true;
            }
        },
        verificaPaswordIguales(){
            if(this.form.password==this.form.password2){
                return false;
            } else{
                return true;
            }
        },
        title(){
            return (this.form.type==0)?'Sing in':(this.form.type==1)?'Sing up':'Reset password';
        }
    }
})