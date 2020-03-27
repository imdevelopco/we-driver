<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <MobileMenu slot="content" v-bind:notifications="notifications"></MobileMenu>

      <sidebar-link to="/app/maps">
        <md-icon>location_on</md-icon>
        <p>Mapa</p>
      </sidebar-link>

      <sidebar-link to="/app/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>

      <sidebar-link to="/app/usuarios">
        <md-icon>group</md-icon>
        <p>Usuarios</p>
      </sidebar-link>

      <sidebar-link to="/app/user">
        <md-icon>input</md-icon>
        <p>Agregar</p>
      </sidebar-link>

      <sidebar-link to="/app/table">
        <md-icon>settings</md-icon>
        <p>Administración</p>
      </sidebar-link>

      <sidebar-link to="/app/typography">
        <md-icon>library_books</md-icon>
        <p>Cerrar sesión</p>
      </sidebar-link>
    
    </side-bar>

    <div class="main-panel">
      <TopNavbar v-bind:notifications="notifications"></TopNavbar>

      <DashboardContent> </DashboardContent>

      <ContentFooter v-if="!$route.meta.hideFooter"></ContentFooter>
    </div>
  </div>
</template>


<style lang="scss"></style>


<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  data(){
    return{
      notifications:[
        "Estación de gasolina aprovada",
        "Actualización precio gasolina",
        "Foto multa cerca"
      ]
    }
  },
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>
