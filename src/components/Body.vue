<template>
  <div class="app-body">
    <!-- <ul>
      <li @click="user.show = !user.show" v-for="user in users">
        <h3>{{user.name}}</h3><span v-show="user.show">{{user.Lname}} {{user.Age}}</span>
      </li>
    </ul> -->
    <button class="btn" @click="callApi">Call Api</button>
   <pre> {{apiData}} </pre>
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
      apiData: {}

    }
  },
  methods: {
    callApi(){
      this.$http.get('https://http-hunt.thoughtworks-labs.net/challenge',{headers: {'userId': 'ShVxgy2x_'}}).then(response =>{
              this.apiData = response
              
              // First Answer start
              // let requestParam = {
              //   'output' : {
              //       'count' : response.body.length
              //   }
              // };
              
              // this.$http.post('https://http-hunt.thoughtworks-labs.net/challenge/output',requestParam,{headers: {'userId': 'ShVxgy2x_'}}).then(data =>{
              //     console.log('Data',data)
              // })
              // First Answer End
              // Second Answer start
                  let today = new Date();
                  let dd = today.getDate();
                  let mm = today.getMonth()+1; 
                  let yyyy = today.getFullYear();
                  const todayDate = Date.parse(`${yyyy}-${mm}-${dd}`)
                  const activeProduct = response.body.filter(product=>{ 
                        const startDate = Date.parse(product.startDate)
                        const endDate = product.endDate != null ? Date.parse(product.endDate) : null
                        if(startDate < todayDate &&  (endDate > todayDate || endDate == null))
                          return product
                        })
                // let requestParam = {
                //   'output' : {
                //       'count' : Number(activeProduct.length)
                //   }
                // };

                // this.$http.post('https://http-hunt.thoughtworks-labs.net/challenge/output',requestParam,{headers: {'userId': 'ShVxgy2x_'}}).then(data =>{
                //     console.log('Data',data)
                // })
             //second answer end

             //third answer start
            //  let output1 = []
            //  activeProduct.map(product => output1.push(product.category))
            //  const removeDuplicatCategory = new Set(output1)
            //  output1 = [...removeDuplicatCategory]
            //  let output = {}
            //  output1.map(category=>{
            //    let activeCategoryProduct = activeProductCount.filter(product=>{return product.category == category})
            //    output[category] = activeCategoryProduct.length
            //  })

            // console.log('output',output)
            // this.$http.post('https://http-hunt.thoughtworks-labs.net/challenge/output',{output},{headers: {'userId': 'ShVxgy2x_'}}).then(data =>{
            //         console.log('Data',data)
            //     })
            //  third answer end 

            //fourth answer start
              //   let totalValue = 0
              //   activeProduct.map(product=> {
              //     totalValue += product.price
              //   })
              //   console.log('totalValue',totalValue)
              //   let requestParam = {
              //     'output' : {
              //         'totalValue' : totalValue
              //     }
              //   };
              // this.$http.post('https://http-hunt.thoughtworks-labs.net/challenge/output',requestParam,{headers: {'userId': 'ShVxgy2x_'}}).then(data =>{
              //       console.log('Data',data)
              //   })
            //fourth answer end



      })
    }
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
