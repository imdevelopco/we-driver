<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 ">
        <CreateForm data-background-color="green"> </CreateForm>
      </div>
    </div>
  </div>
</template>

<script>
import CreateForm from "@/pages/Layout/CreateForm.vue";

export default {
  components: {
    CreateForm
  }
};
</script>
