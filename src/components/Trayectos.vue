<template>
  <v-container>
    <v-layout row wrap justify-center>
      <template v-if="routes.length>0">
        <v-flex v-for="trayecto in routes" :key="trayecto.id" md3 sm 4 xs6 >
          <v-card class="something">
            <v-card-title>{{trayecto.terminal}}</v-card-title>
            <v-card-text>Ida: {{trayecto.ida}}</v-card-text>
            <v-card-text>Ida: {{trayecto.vuelta}}</v-card-text>
          </v-card>
        </v-flex>
      </template>
      <template v-else>
        <div>There is nothing to see</div>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import { selectAll } from '../api/api'
export default {
  name: 'trayectos',
  data:function(){
    return{
      routes:[] 
    }
  },
  beforeCreate(){
    
    selectAll('trayecto')
      .then(response=>{
        if(response.status===200){
          const { response: r } = response.request
          this.routes=[...JSON.parse(r)]
        }
      })
  }
}
</script>

<style scoped>
  .something{
    margin: 10px
  }
</style>
