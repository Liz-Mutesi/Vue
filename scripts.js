const tvChallenge = {
    data() {
      return { 
       switchBtn : true,
      }
    },
    methods: {
        switchTv:function(){

            this.switchBtn =!this.switchBtn
        }
      }
  } 
  
  Vue.createApp(tvChallenge).mount('#app')
  