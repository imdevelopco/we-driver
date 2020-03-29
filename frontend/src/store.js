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
        //dashboard data
        totalUsers: 623230,
        totalCameras: 45,
        totalGasStation: 78,
        avgGas: 8400,
        usersRegisterdata: {
            data: {
              labels: ["M", "T", "W", "T", "F", "S", "S"],
              series: [[12, 17, 7, 17, 23, 18, 38]]
            },
            options: {
              lineSmooth: {},
              low: 0,
              high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
              chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
            }
        },
        stationsChart: {
            data: {
              labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
              series: [[230, 750, 450, 300, 280, 240, 200, 190]]
            },
    
            options: {
              lineSmooth: {},
              low: 0,
              high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
              chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
            }
        },
        camerasChart: {
            data: {
              labels: [
                "Ja",
                "Fe",
                "Ma",
                "Ap",
                "Mai",
                "Ju",
                "Jul",
                "Au",
                "Se",
                "Oc",
                "No",
                "De"
              ],
              series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
            },
            options: {
              axisX: {
                showGrid: false
              },
              low: 0,
              high: 1000,
              chartPadding: {
                top: 0,
                right: 5,
                bottom: 0,
                left: 0
              }
            },
            responsiveOptions: [
              [
                "screen and (max-width: 640px)",
                {
                  seriesBarDistance: 5,
                  axisX: {
                    labelInterpolationFnc: function(value) {
                      return value[0];
                    }
                  }
                }
              ]
            ]
        }
    },
    getters:{
        totalNotifications: state =>{
            return state.notifications.length
        }
    },
    mutations:{
        setUserLineSmooth(state, lineSm){
            state.usersRegisterdata.options.lineSmooth = lineSm
        },
        setStationsLineSmooth(state, lineSm){
            state.stationsChart.options.lineSmooth = lineSm
        }
    }
})