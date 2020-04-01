import Vue from 'vue'
import Vuex from 'vuex'
import GoogleMapsLoader from "google-maps";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        user:{name:'Camilo', admin:true},
        users:[
            {id:1, name: 'Camilo Arias', barrio: 'Terron', city : 'Cali', location:'Oeste' },
            {id:2, name: 'Pedro Nel', barrio: 'Terron', city : 'Cali', location:'Oeste' },
            {id:3, name: 'Martha', barrio: 'Terron', city : 'Cali', location:'Oeste' },
            {id:4, name: 'Carlos', barrio: 'Mariano Ramos', city : 'Cali', location:'Oriente' },
            {id:5, name: 'Sebas', barrio: 'Melendez', city : 'Cali', location:'Sur' },
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
              labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
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
              labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"],
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
                "En",
                "Fe",
                "Ma",
                "Ab",
                "Ma",
                "Jun",
                "Jul",
                "Ag",
                "Se",
                "Oc",
                "No",
                "Di"
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
        },

        //Settings Google maps
        googleMapSetting:{
          zoom: 13,
          center: {},
          scrollwheel: false, // deshabilitar scroll
          styles: [
            {
              featureType: "water",
              stylers: [
                { saturation: 43 },
                { lightness: -11 },
                { hue: "#0088ff" }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                { hue: "#ff0000" },
                { saturation: -100 },
                { lightness: 99 }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#808080" }, { lightness: 54 }]
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.fill",
              stylers: [{ color: "#ece2d9" }]
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [{ color: "#ccdca1" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#767676" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#ffffff" }]
            },
            { featureType: "poi", stylers: [{ visibility: "off" }] },
            {
              featureType: "landscape.natural",
              elementType: "geometry.fill",
              stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
            },
            { featureType: "poi.park", stylers: [{ visibility: "on" }] },
            {
              featureType: "poi.sports_complex",
              stylers: [{ visibility: "on" }]
            },
            { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
            {
              featureType: "poi.business",
              stylers: [{ visibility: "simplified" }]
            }
          ]
        }
    },
    getters:{
        totalNotifications: state =>{
            return state.notifications.length
        }
    },
    mutations:{
        //Graficos
        setUserLineSmooth(state, lineSm){
            state.usersRegisterdata.options.lineSmooth = lineSm
        },
        setStationsLineSmooth(state, lineSm){
            state.stationsChart.options.lineSmooth = lineSm
        },
        //Maps
        setCenterMap(state, center){
          state.googleMapSetting.center = center;
        }
    }
})