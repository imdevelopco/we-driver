<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul>
          <li>
            
          </li>
          <li>
            <a @click="aboutUs">
              Acerca de nosotros
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }}
        <a href="#">WeDrive</a>, hecho en Cali, Colombia con <i class="fa fa-heart heart"></i>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  methods:{
    aboutUs(){
      this.$router.push('AboutUs');
    }
  }
};
</script>
<style></style>
