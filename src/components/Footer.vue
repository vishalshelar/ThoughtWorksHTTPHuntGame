<template>
  <div class="app-footer">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg:"Copyright @2018 Vishal Shelar"
    }
  },
  methods: {

  }
}
</script>
<style>
.app-footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 3px;
  text-align: center;
  background-color: grey;
  color: white;
}

</style>
