
class Bobas {
    constructor(){
        this.bobas = []
        this.ingredients = []
        this.adapter = new BobasAdapter()
        this.ingAdapter = new IngredientAdapter()
        this.initiBindingsAndEventlistners()
        this.fetchAndLoadBobas()
        this.fetchAndLoadIngredients()
    }

    initiBindingsAndEventlistners(){
        this.bobasContainer = document.getElementById('bobas-container')
        this.ingredientContainer = document.getElementById('ingredient-container')
        this.bobaName = document.getElementById('boba-name')
        this.bobaFlavor = document.getElementById('boba-flavor')
        //grab ingredient ids
        //grab the checked boxes > create array/ grab only the checked one => array send that
        this.bobaForm = document.getElementById('new-boba-form')
        this.bobaForm.addEventListener('submit',this.createBoba.bind(this))
        // question:where did bobaForm got defined? send back the check ids
        // this.ingButton = document.getElementById('ing-button')
        // this.ingButton.addEventListener('click', function(){
        //     IngredientAdapter.getIngredients();
        //   });
        // this.bobaForm = document.getElementById('new-boba-form')
        // this.bobaForm.addEventListener('submit', Boba.createBoba)
    
      }

    createBoba(e){
        e.preventDefault()
        const name = this.bobaName.value
        const flavor = this.bobaFlavor.value
        //"green"
        const ingredient_ids = //grab checked checkboxes. //value from the array
        // [1,2,3,4]
        //array of ids(only the one that's checked)
        this.adapter.createBoba(name,flavor).then(boba => {
            console.log(boba)
        })
    }

    fetchAndLoadBobas(){
        
        this.adapter
        .getBobas()
        .then(bobas => {
            bobas.forEach(boba => {
                const newBoba = new Boba(boba)
                this.bobas.push(newBoba)
                // iterate and then push indivisual object into []
                // console.log(this.bobas)
            })
            this.render()
        })
    }

    fetchAndLoadIngredients(){
        
        this.ingAdapter
        .getIngredients()
        .then(ingredients => {
            ingredients.forEach(ingredient => {
                const newIngredient = new Ingredient(ingredient)
                this.ingredients.push(newIngredient)
                // iterate and then push indivisual object into []
                // console.log(this.bobas)
            })
            this.renderIngredients()
        })
    }
    render(){     
            this.bobasContainer.innerHTML = this.bobas.map(boba => boba.renderLi()).join('')

        }

    renderIngredients(){
            this.ingredientContainer.innerHTML = this.ingredients.map(ingredient => ingredient.renderCheckbox()).join('')
            
    }
}

class Boba {
    constructor(bobaJSON){
        this.id = bobaJSON.id
        this.name = bobaJSON.name
        this.flavor = bobaJSON.flavor
    }

    renderLi(){
        return `<li>Boba Name: ${this.name}<br>Tea Flavor: ${this.flavor}<br>Ingredients: </li>`
    }
}

class Ingredient {
    constructor(ingredientJSON){
        this.id = ingredientJSON.id
        this.name = ingredientJSON.name
    }

    renderCheckbox(){
        return `<input type="checkbox" ${this.name}>` 
    }
}