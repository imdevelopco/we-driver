<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Nombre">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Pais">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Ciudad">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Rol">{{ item.rol }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
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
          name: "Dakota Rice",
          rol: "user",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        {
          name: "Minerva Hooper",
          rol: "user",
          country: "Curaçao",
          city: "Sinaai-Waas"
        },
        {
          name: "Sage Rodriguez",
          rol: "Admin",
          country: "Netherlands",
          city: "Overland Park"
        },
        {
          name: "Philip Chaney",
          rol: "Admin",
          country: "Korea, South",
          city: "Gloucester"
        },
        {
          name: "Doris Greene",
          rol: "user",
          country: "Malawi",
          city: "Feldkirchen in Kārnten"
        },
        {
          name: "Mason Porter",
          rol: "User",
          country: "Chile",
          city: "Gloucester"
        }
      ]
    };
  }
};
</script>
