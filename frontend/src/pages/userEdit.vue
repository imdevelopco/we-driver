<template>
  <div class="content">
    <div class="md-layout"  v-if="found">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="green"> </edit-profile-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card> </user-card>
      </div>
    </div>
    <div class="notFound" v-if="!found">
      <h1>404 Not found</h1>
      <h3>El Usuario con id {{ this.$route.params.userId }} no ha suido encontrado</h3>
    </div>
  </div>
</template>

<script>
import { EditProfileForm, UserCard } from "@/pages";

export default {
  data(){
    return{
      found:true,
      name:"",
      lastname:"",
      mail:""
    }
  },
  components: {
    EditProfileForm,
    UserCard
  },
  mounted(){
    var userParam = parseInt(this.$route.params.userId)
    var editUser = this.$store.state.users.find(user => user.id === userParam );
    if(editUser != undefined){
      this.name = editUser.name
      this.lastname = editUser.barrio
      this.mail = editUser.location
    }
    else{
      this.found = false
    }
  }
};
</script>

<style scoped>
.notFound{
  text-align: center;
}
</style>