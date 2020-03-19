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
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          name: "Camara",
          location: "15.1651014,-7.305726",
          barrio: "Cristobal Colon",
          city: "Cali"
        },
        {
          id: 2,
          name: "Camara",
          location: "15.1659014,-7.307726",
          barrio: "La base",
          city: "Cali"
        },
        {
          id: 3,
          name: "EDS",  
          location: "4.6096912,-83.3981411",
          barrio: "Salomia",
          city: "Cali"
        },
        {
          id: 4,
          name: "EDS",
          location: "8.6096912,-85.3997411",
          barrio: "Caney",
          city: "Cali"
        }
      ]
    };
  }
};
</script>
