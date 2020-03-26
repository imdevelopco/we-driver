<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <md-field>
        <label>Buscar</label>
        <md-input v-model="search" type="text"></md-input>
      </md-field>
    </li>
    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">notifications</i>
          <span class="notification"  v-if="notifications.length > 0">{{ notifications.length }}</span>
          <p>Notifications</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li v-for="notification in notifications" :key="notification">
            <a href="#">{{ notification}}</a>
          </li>
        </ul>
      </drop-down>
    </li>
    <li>
      <a href="#" data-toggle="dropdown" class="dropdown-toggle"
        ><i class="material-icons">person</i>
        <p>Profile</p></a
      >
    </li>
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
  props:{
    notifications:{ type: Array}
  }
};
</script>
