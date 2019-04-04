<template>
  <v-dialog
      v-model="open"
      max-width="290"
      persistent
      lazy
    >
      <v-card>
        <v-card-title class="headline">Nuevo Trayecto</v-card-title>

        <v-card-text>
          <v-text-field
            label="Ida"
            v-model="ida"
            v-bind:rules="[rules.required,rules.max]"
            :value="ida"
          ></v-text-field>
          <v-text-field
            label="Vuelta"
            v-model="vuelta"
            v-bind:rules="[rules.required,rules.max]"
            :value="vuelta"
          ></v-text-field>
          <v-text-field
            label="Terminal"
            v-model="terminal"
            v-bind:rules="[rules.required,rules.maxTerminal]"
            :value="terminal"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="closeDialog"
          >
            Cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="newTrayecto"
          >
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { insert, update } from '../api/api'
export default {
  name: 'DialogTrayectos',
  props:['open','uIda', 'uVuelta', 'uTerminal', 'didUpdate', 'uId'],
  data(){
    return {
      ida: '',
      vuelta: '',
      terminal: '',
      id:'',
      update:false,
      rules: {
        required: value => !!value || 'Requerido.',
        max: v => v.length <= 300 || 'Maximo 300 caracteres',
        maxTerminal: v => v.length <= 250 || 'Maximo 250 caracteres',
      }
    }
  },
  methods:{
    closeDialog(){
      this.$emit('close',false)
    },
    newTrayecto(){
      if(this.ida.length>0&& this.vuelta.length>0 && this.terminal.length>0 && !this.update){
        insert('trayecto',
          {
            ida:this.ida,
            vuelta:this.vuelta,
            terminal:this.terminal
        }).then(()=>{this.$emit('close', true)})
      }else if(this.ida.length>0&& this.vuelta.length>0 && this.terminal.length>0 && this.update){
        update('trayecto',
          {
            id:this.id,ida:this.ida,
            vuelta:this.vuelta,
            terminal:this.terminal
        }).then(()=>{this.$emit('close', true)})
      }
    },
    delErr(){
      if(this.error.length>0){
        this.error=null
      }
    }
  },
  watch:{
    uIda:function(newVal){
      this.ida = newVal
    },
    uVuelta:function(newVal){
      this.vuelta = newVal
    },
    uTerminal:function(newVal){
      this.terminal = newVal
    },
    didUpdate:function(newVal){
      this.update=  newVal
    },
    uId:function(newVal){
      this.id = newVal
    }
  }
}
</script>

<style scoped>
  .error{
    text-align: center;
    color: white;
    font-weight: bold;
  }
</style>
