<template>
  <div id="map"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
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
        title: "posicion camaras",
      });

      // Poner el marcador en el mapa, setMap();
      marker.setMap(map);
    },
  },
  mounted() {
    var _this = this;
    this.$store.state.loader.load().then( google => {
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
