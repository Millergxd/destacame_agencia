<template>
  <v-toolbar>
    <DialogTrayectos v-bind:open="openDialog" v-on:close="closeDialog"/>
    <template v-if="$vuetify.breakpoint.name === 'xs' || $vuetify.breakpoint.name === 'sm'">
      <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          depressed
          class="small"
        >
          <v-toolbar-side-icon></v-toolbar-side-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile>
          <v-list-tile-title v-on:click="newTrayecto">Crear Trayecto</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    </template>
    <v-toolbar-title>Destacame Agencia</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-on:click="newTrayecto" flat>Crear trayecto</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import DialogTrayectos from './DialogTrayectos'

  export default {
    name:'header',
    data:function(){
      return{
        openDialog:false
      }
    },
    components:{
      DialogTrayectos
    },
    created(){
      console.log(this.$vuetify.breakpoint)
    },
    methods:{
      newTrayecto(){
        console.log("eh,")
        this.openDialog=true
      },
      closeDialog(update){
        this.openDialog=false
        if(update){
          this.$emit('update')
        }
      }
    }
  }
</script>

<style scoped>

  .small{
    padding: 0;
    margin: 0;
    min-width: 0;
  }

</style>
