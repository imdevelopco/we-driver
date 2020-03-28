<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Item">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Barrio">{{ item.barrio }}</md-table-cell>
        <md-table-cell md-label="Ciudad">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Ubicación">{{ item.location }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    },
    usersProps:{
      Type:Object
    }
  },
  data() {
    return {
      selected: [],
      users: this.usersProps
    };
  }
};
</script>
