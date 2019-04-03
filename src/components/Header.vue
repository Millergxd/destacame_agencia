<template>
   <v-toolbar>
    <template v-if="$vuetify.breakpoint.name === 'xs' || $vuetify.breakpoint.name === 'sm'">
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </template>
    <v-toolbar-title>Destacame Agencia</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Crear trayecto</v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
  export default {
    name:'header',
    created(){
      console.log(this.$vuetify.breakpoint)
    }
  }
</script>

<style>

</style>
