<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">  
          <div class="md-autocomplete">
            <h4>Hola, {{name}}</h4>
          </div>        
          <md-list>
            <md-list-item to="/app/dashboard" v-if="permisos == 'true'">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item>

            <li class="md-list-item">
               <a href="#/notifications" class="md-list-item-router md-list-item-container md-button-clean dropdown">
                <div class="md-list-item-content">
                    <drop-down>
                      <md-button
                        slot="title"
                        class="md-button md-just-icon md-simple"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">person</i>
                        <p class="hidden-lg hidden-md">Profile</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li>
                          <a @click="logout">Salir</a>
                        </li>
                      </ul>
                    </drop-down>
                </div>
               </a>
            </li>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {
      selectedSearch: null,
      resentSearches: [],
      permisos:'',
      name:''
    };
  },
  computed:{
    totalNotifications(){
      return this.$store.getters.totalNotifications
    },
    notifications(){
      return this.$store.state.notifications
    }
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    logout(){
      this.$store.dispatch('destroyToken')
      .then(response => 
      this.$router.go('/login'))
    } 
  },
  mounted(){
    this.permisos = localStorage.getItem('user')
    this.name = localStorage.getItem('name')
  }
};
</script>

<style lang="css"></style>
