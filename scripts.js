const conditionalRendering = {
    data() {
      return { 
       imageToShow : ""
      }
    },
    methods: {
        switchOn(){

            this.imageToShow="/Images/bulb-on.jpg"

        }
      }
  } 
  
  Vue.createApp(conditionalRendering).mount('#app')
  