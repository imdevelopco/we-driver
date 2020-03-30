<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor" md-sort="id" md-sort-order="asc">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Item" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Barrio" md-sort-by="barrio">{{ item.barrio }}</md-table-cell>
        <md-table-cell md-label="Ciudad" md-sort-by="ciudad">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Ubicación" md-sort-by="ubicacion">{{ item.location }}</md-table-cell>
        <md-table-cell md-label="Acciones">
          <md-button class="md-accent">Accent</md-button>
        </md-table-cell>
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
