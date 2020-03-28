import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        users:[
            {id:1, name: 'Camilo Arias', barrio: 'Terron', city : 'Cali', location:'Oeste' },
            {id:2, name: 'Pedro Nel', barrio: 'Terron', city : 'Cali', location:'Oeste' },
            {id:3, name: 'Martha', barrio: 'Terron', city : 'Cali', location:'Oeste' },
            {id:4, name: 'Carlos', barrio: 'Mariano Ramos', city : 'Cali', location:'Oriente' },
        ],
        notifications:[
            "Estación de gasolina aprovada",
            "Actualización precio gasolina",
            "Foto multa cerca"
        ],
        totalUsers: 623230,
        totalCameras: 45,
        totalGasStation: 78,
        avgGas: 8400
    },
    getters:{
        totalNotifications: state =>{
            return state.notifications.length
        }
    }
})