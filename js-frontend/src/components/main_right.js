
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
        
        const ingredient_ids = Array.from(e.target).filter(
            ing => ing.type === 'checkbox' && ing.checked).map(
            input => input.value)
        
        // console.log(ingredient_ids)
        //grab checked checkboxes. //value from the array
        // [1,2,3,4]
        //array of ids(only the one that's checked)
        this.adapter.createBoba(name,flavor,ingredient_ids).then(boba => {
            const newBoba = new Boba(boba)
            this.bobas.push(newBoba)
            this.bobasContainer.appendChild(newBoba.renderLi())
        })
        this.bobaName.value = ''
        this.bobaFlavor.value = ''
        Array.from(e.target).map(
            ing => ing.type === 'checkbox' && ing.checked === false)
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
            ingredients.forEach(ingredient_id => {
                const newIngredient = new Ingredient(ingredient_id)
                this.ingredients.push(newIngredient)
            })
            this.renderIngredients()
        })
    }
    render(){     
            // this.bobasContainer.innerHTML = this.bobas.map(boba => this.bobasContainer.innerHTML.boba.renderLi()).join('')
            this.bobas.map(boba => {
                console.log(boba.renderLi())
            this.bobasContainer.appendChild(boba.renderLi()) 
           })
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
        this.ingredients = bobaJSON.ingredients
    }

    renderLi(){
        const li = document.createElement('li')
        li.id = this.id
        li.innerHTML= `Boba Name: ${this.name}<br>Tea Flavor: ${this.flavor}
        <br>Ingredients: ${this.ingredients.map(ingredients => ingredients.name).join(', ')}`
        const deleteBobaButton = document.createElement('button')
        deleteBobaButton.innerText = 'delete boba'
        deleteBobaButton.id =this.id
        deleteBobaButton.addEventListener('click',this.deleteBoba)
        li.appendChild(deleteBobaButton)
        return li
    }

    deleteBoba(ev) {
        console.log(ev)
         return fetch('http://localhost:3000/api/v1/bobas' + '/' + ev.target.id, {
           method: 'DELETE'
         })
         .then(response => response.json())
         .then(response => {
           const l = document.querySelector(`${response.id}`)
         console.log(l)})
       }

}

class Ingredient {
    constructor(ingredientJSON){
        this.id = ingredientJSON.id
        this.name = ingredientJSON.name
    }

    renderCheckbox(){
        return `<input type="checkbox" name=${this.name} value= ${this.id} >
                <label>${this.name}</label>` 
    }
}



