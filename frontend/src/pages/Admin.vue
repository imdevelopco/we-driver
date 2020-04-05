<template>
  <div class="content">
    <div class="md-layout">

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <div id="map"></div>
      </div>

      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="yellow">
            <h4 class="title">Camaras por aprobación</h4>
            <p class="category">Registro de camaras en espera por aprobación</p>
          </md-card-header>
          <md-card-content>
            <CheckTable tableHeaderColor="green"></CheckTable>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Estaciones por aprobación</h4>
            <p class="category">Registro de estaciones de combustible en espera por aprobación</p>
          </md-card-header>
          <md-card-content>
            <CheckTable tableHeaderColor="red"></CheckTable>
          </md-card-content>
        </md-card>

      </div>
    </div>
  </div>
</template>

<script>
import { CheckTable } from "@/components";
import { mapState } from 'vuex';

export default {
  components: {
    CheckTable,
  },
  computed:{
      ...mapState({
          myLatlng: state => state.googleMapSetting.center,
          setZoomMap: 'setZoomMap'
      })
  },
  methods: {
    initMap(google) {
      var mapOptions = this.$store.state.googleMapSetting,
          map = new google.maps.Map(document.getElementById("map"), mapOptions);
         
      this.$store.state.checkSource.cameras.forEach(cam => {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng( cam.lat, cam.lng),
          title: "posicion camaras",
          map:map
        });
      });
    },
  },
   mounted() {
    var _this = this;
    this.$store.state.loader.load().then( google => {
      _this.$store.commit('setCenterMap',new google.maps.LatLng(3.42158, -76.5225000) )
      _this.$store.commit('setZoomMap',13)
      _this.initMap(google);
    });
  }
};
</script>
