<template>
  <v-app>
    <Header v-on:update="didUpdate"/>
    <router-view ref="view"></router-view>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  },
  methods:{
    didUpdate(){
      console.log(this.$refs)
    }
  }
}
</script>
