const bulbChallenge = {
    data() {
      return { 
       switchBtn : true,
      }
    },
    methods: {
        switchBulb:function(){

            this.switchBtn =!this.switchBtn
        }
      }
  } 
  
  Vue.createApp(bulbChallenge).mount('#app')
  