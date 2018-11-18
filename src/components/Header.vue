<template>
  <div class="app-header">
    <h3 class="header">{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg:"My Project"
    }
  },
  methods: {

  }
}
</script>

<style>
.app-header{
  width: 100%;
  padding: 10px;
  text-align: center;
  background-color: black;
  color: white;
}

</style>
