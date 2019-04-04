<template>
  <v-container>
    <Loading v-if="load"/>
    <v-layout row wrap justify-center>
      <template v-if="routes.length>0">
        <v-flex v-for="trayecto in routes" :key="trayecto.id" md3 sm6 xs8 >
          <v-card class="something">
            <v-img
              :src="returnImage()"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3>{{trayecto.terminal}}</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <p><b>Ida:</b> {{trayecto.ida}}</p>
              <p><b>Vuelta:</b> {{trayecto.vuelta}}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn v-on:click="goBuses(trayecto.id)" flat color="orange">Buses</v-btn>
              <v-btn v-on:click="updateTrayecto(trayecto)" flat color="orange">Editar</v-btn>
              <v-btn v-on:click="deleteTrayecto(trayecto.id)" flat color="orange">Borrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <DialogTrayectos 
          v-bind:uIda="ida"
          v-bind:uVuelta="vuelta"
          v-bind:uTerminal="terminal"
          v-bind:open="dialog" 
          v-bind:uId ="id"
          v-bind:didUpdate="update"
          v-on:close="closeDialog" />
      </template>
      <template v-else>
        <div>There is nothing to see</div>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import { selectAll, del } from '../api/api'
import Loading from './Loading'
import DialogTrayectos from './DialogTrayectos'

export default {
  name: 'trayectos',
  components:{
    Loading,
    DialogTrayectos,
  },
  data:function(){
    return{
      routes:[],
      load:true,
      dialog:false,
      ida:'',
      vuelta:'',
      terminal:'',
      id:'',
      update:false
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
  },
  created(){
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.load=false
      }
    }
  },
  methods:{
    returnImage(){
      return require(`../assets/randomImages/${Math.floor(Math.random()*20+1)}.jpg`)
    },
    deleteTrayecto(id){
      del('trayecto',id)
      .then(()=>{
        selectAll('trayecto')
          .then(response=>{
            if(response.status===200){
              const { response: r } = response.request
              this.routes=[...JSON.parse(r)]
              this.load=false
            }
          })
      })
    },
    goBuses(id){
      route.push({path:'/buses', params:{id:id}})
    },
    updateTrayecto(trayecto){
      console.log(trayecto)
      this.ida = trayecto.ida
      this.vuelta = trayecto.vuelta
      this.terminal = trayecto.terminal
      this.id = trayecto.id
      this.update = true
      this.dialog= true
      
    },
    closeDialog(update){
      this.dialog= false
      if(update){
        selectAll('trayecto')
        .then(response=>{
          if(response.status===200){
            const { response: r } = response.request
            this.routes=[...JSON.parse(r)]
          }
        })
      }
    }

  }
}
</script>

<style scoped>
  .something{
    margin: 10px
  }
</style>
