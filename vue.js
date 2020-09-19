var app=new Vue ({

    el: "#app",
    data: {
       result: 0,
       number1: 0,
       number2: 0,
       operator:"plus",
       placeholder:"Entrez un nombre"

    },methods: {
      calculer() {
          /*
          console.log("number1",this.number1);
          console.log("operator",this.operateur);
          console.log("number2",this.number2);
          */
         if(this.operator === 'plus'){
         this.result= Number(this.number1) + Number(this.number2) // je converti les chaines en nombre avec la fonction Number()
         }
         if(this.operator === 'moins'){
            this.result= Number(this.number1) - Number(this.number2) 
        }
        if(this.operator === 'diviser'){
            this.result= Number(this.number1)/ Number(this.number2)
        }
        if(this.operator === 'multiplier'){
            this.result=Number(this.number1) * Number(this.number2)
        }
    },

        reset() {
          this.number1=0
          this.number2=0
          this.operator="plus"
          this.result=0
         
        }
    }
});