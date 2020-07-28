class App {
    constructor(){
        // this.bobas = new Bobas()
        // this.boba = new Boba()
        // this.ingAdapter = new IngredientAdapter()
        this.initiBindingsAndEventlistners()
    }
    initiBindingsAndEventlistners(){
        this.ingButton = document.getElementById('ing-button')
        this.ingButton.addEventListener('click', function(){
            IngredientAdapter.getIngredients();
          });
      
        this.bobaForm = document.getElementById('new-boba-form')
        this.bobaForm.addEventListener('submit', Boba.createBoba)
    
        // send back the check ids
      }
}


// app creates a new boba components, whenever invoke app with a new keyword, fires up the constructor, consrtuctor assign the property bobas