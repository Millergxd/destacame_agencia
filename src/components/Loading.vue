<template>
  <div class="loading">
    <div class="containerLoading">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  name:'Loading'
}
</script>

<style scope>
  .loading{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom:0;
    left:0;
    right: 0;
    background-color: white;
    z-index: 10;
  }
  .containerLoading{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
