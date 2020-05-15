<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
    </div>

    <md-card-content>
      <h4 class="card-title">{{ name }}</h4>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    name:{type:String},
    picture:{type:String},
    
  },
  data() {
    return {};
  }
};
</script>
<style></style>
