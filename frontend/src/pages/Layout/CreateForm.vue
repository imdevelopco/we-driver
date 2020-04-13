<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Registro</h4>
        <p class="category">Registra una cámara de fotomulta o una estación de combustible</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
              <md-radio v-model="tipo" value="camara">Cámara</md-radio>
              <md-radio v-model="tipo" value="estacion">Estación</md-radio>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-50">
            <div id="map"></div>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Velocidad maxima</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          
          
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>About Me</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Update Profile</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>


<script>
import {Loader} from "google-maps";
import { mapState } from 'vuex'
import apiKey from '../../apiKey';

export default {
  name: "create-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      tipo: null,
      username: null,
      aboutme:
        "Esta fotomulta esta muy oculta, deben estar pendientes"
    };
  },
  computed:{
      ...mapState({
          myLatlng: state => state.googleMapSetting.center,
      })
  },
  methods: {
    initMap(google) {
      var mapOptions = this.$store.state.googleMapSetting,
          map = new google.maps.Map(document.getElementById("map"), mapOptions);
         
      var marker = new google.maps.Marker({
        position: this.myLatlng,
        title: "Crear Cámara, Fotomulta"
      });

      // Poner el marcador en el mapa, setMap();
      marker.setMap(map);
    },
    canIuseGeolocation(){
        return (navigator.geolocation) ? true : false;
    },
  },
  mounted() {
    var _this = this;
    const loader = new Loader(apiKey.apiKey, this.$store.state.versionMaps);

    loader.load().then( google => {
        navigator.geolocation.getCurrentPosition(position => {
            var startLocation = {
                lat: position.coords.latitude, 
                long: position.coords.longitude
            } 
            _this.$store.commit('setCenterMap',new google.maps.LatLng(startLocation.lat, startLocation.long) )
            _this.initMap(google);
        })
    });
  }
};
</script>
<style></style>
