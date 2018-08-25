<template>
  <div class="app-body">
    <ul>
      <li @click="user.show = !user.show" v-for="user in users">
        <h3>{{user.name}}</h3><span v-show="user.show">{{user.Lname}} {{user.Age}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      users: [{name:'Vishal',Lname:'Shelar',Age:29,show:false},
              {name:'Priyanka',Lname:'Shelar',Age:29,show:false},
              {name:'Amit',Lname:'Kulkarni',Age:29,show:false},
              {name:'Goutam',Lname:'Saha',Age:29,show:false},
              {name:'Rekha',Lname:'Mehta',Age:29,show:false},
              {name:'Mitesh',Lname:'Vyas',Age:29,show:false}],
      description: ''

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.app-body{
  width: 800px;
  margin: auto;
}

li{
  display: inline-block;
  vertical-align:top;
  cursor: pointer;
  padding: 50px;
  margin: 10px;
  max-height: 150px;
  width: 200px;
  background: linear-gradient(45deg, #EEE, #FFF);
}

</style>
