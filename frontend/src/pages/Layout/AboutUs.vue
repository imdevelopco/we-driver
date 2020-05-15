<template>
  <div>
    <div class="logoWe">
      <img  src="@/assets/img/weDrive.png" />
    </div>
    <div class="md-layout">
    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30">
      <stats-card data-background-color="orange">
        <template slot="header">
          <p class="title">Andrés Camilo Arias Martinez</p>
        </template>

        <template slot="content">
          <img :src="camilo" class="integrantesWe">
        </template>
        <template slot="footer">
          <div class="stats">
            <md-icon>code</md-icon>https://github.com/CamiloArias47
          </div>
        </template>
      </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30">
      <stats-card data-background-color="green">
        <template slot="header">
          <p class="title">Carlos Andrés Córdoba Ramos</p>
        </template>

        <template slot="content">
          <img :src="carlos" class="integrantesWe">
        </template>
        <template slot="footer">
          <div class="stats">
            <md-icon>code</md-icon> https://github.com/imdevelopco
          </div>
        </template>
      </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30"
      >
      <stats-card data-background-color="blue">
        <template slot="header">
          <p class="title">Henry Salazar Carvajal</p>
        </template>

        <template slot="content">
          <img :src="henry" class="integrantesWe">
        </template>
        <template slot="footer">
          <div class="stats">
            <md-icon>code</md-icon>https://github.com/henryghost
          </div>
        </template>
      </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30"
      >
      <stats-card data-background-color="purple">
        <template slot="header">
          <p class="title">Mauricio Steban Diaz Hoyos</p>
        </template>

        <template slot="content">
          
          <img :src="mauricio" class="integrantesWe">
        </template>
        <template slot="footer">
          <div class="stats">
            <md-icon>code</md-icon>https://github.com/MauricioDiazR
          </div>
        </template>
      </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30"
      >
      <stats-card data-background-color="blue">
        <template slot="header">
          <p class="title">Jhon Edinson Henao Puenayan</p>
        </template>

        <template slot="content">
          
          <img :src="jhon" class="integrantesWe">
        </template>
        <template slot="footer">
          <div class="stats">
            <md-icon>code</md-icon>https://github.com/JhonHenao1301
          </div>
        </template>
      </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30"
      >
      <stats-card data-background-color="red">
        <template slot="header">
          <p class="title">Luis Miguel Gomez Idrobo</p>
        </template>

        <template slot="content">
          
          <img :src="miguel" class="integrantesWe">
        </template>
        <template slot="footer">
          <div class="stats">
            <md-icon>code</md-icon>https://github.com/hackpaladin
          </div>
        </template>
      </stats-card>
      </div>
      </div>
      
  </div>
</template>

<script>
import { StatsCard } from "@/components";

export default {
  components: {
    StatsCard
  },
  props: {
    weDriveLogo: {
      type: String,
      default: require("@/assets/img/weDrive.png")
    },
    camilo: {
      type: String,
      default: require("@/assets/img/faces/camilo.jpg")
    },
    carlos: {
      type: String,
      default: require("@/assets/img/faces/carlos.jpeg")
    },
    henry: {
      type: String,
      default: require("@/assets/img/faces/henry.jpeg")
    },
    miguel: {
      type: String,
      default: require("@/assets/img/faces/miguel.jpeg")
    },
    jhon: {
      type: String,
      default: require("@/assets/img/faces/jhon.jpeg")
    },
    mauricio: {
      type: String,
      default: require("@/assets/img/faces/mauricio.jpeg")
    }
  },
  watch: {
    $router(to, from) {
      console.log("to", to);
      console.log("from", from);
    }
  }
};
</script>

<style>
.logoWe {
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  display: block;
}
.integrantesWe{
  height: 250px !important; 
  border-radius: 8px; 
}

</style>