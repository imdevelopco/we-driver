<template>
    <div>
        <div  class="md-layout-item md-medium-size-100 md-xsmall-size-100">
            <md-card>
                <md-card-header data-background-color="red">
                    <h4 class="title">Usuarios</h4>
                    <p class="category"></p>
                </md-card-header>
                <md-card-content>
                    <ordered-table table-header-color="red" v-bind:usersProps="users"></ordered-table>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
import {OrderedTable} from "@/components";

export default {
    computed:{
        users(){
            //return this.$store.getters.getUsuarios;
            return this.$store.state.usuarios
        }
    },
    components:{
        OrderedTable
    },
    methods: {
    },
    mounted(){
        console.log("DEBUG! state.usuarios.length", this.$store.state.usuarios.length)
        console.log("DEBUG! getters.getUsuarios", this.$store.getters.getUsuarios.length)
       if(this.$store.state.usuarios.length == 0){
        console.log("DEBUG pedir datos usuarios")
           this.$store.dispatch('setUsuarios')
            .then((response) => {
                console.log("DEBUG this.$store.getters.getUsuarios", this.$store.getters.getUsuarios);
                console.log("DEBUG this.$store.state.usuarios", this.$store.state.usuarios);
            })
       }
    }
}
</script>