<template>
  <ul class="nav nav-mobile-menu">
    
  </ul>
</template>
<script>
export default {
  data() {
    return {
      search: null,
      selectedEmployee: null,
      employees: [ ]
    };
  },
  computed:{
    totalNotifications(){
      return this.$store.getters.totalNotifications
    },
    notifications(){
      return this.$store.state.notifications
    }
  }
};
</script>
