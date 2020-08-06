
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
        this.bobaForm = document.getElementById('new-boba-form')
        this.bobaForm.addEventListener('submit',this.createBoba.bind(this))
      }

    createBoba(e){
        e.preventDefault()
        const name = this.bobaName.value
        const flavor = this.bobaFlavor.value
        const ingredient_ids = Array.from(e.target).filter(
            
            ing => ing.type === 'checkbox' && ing.checked).map(
            input => input.value)
        this.adapter.createBoba(name,flavor,ingredient_ids).then(boba => {
            const newBoba = new Boba(boba)
            this.bobas.push(newBoba)
            this.bobasContainer.appendChild(newBoba.renderLi())
        })
        this.bobaName.value = ''
        this.bobaFlavor.value = ''
        Array.from(e.target).map(
            ing => {if(ing.type === 'checkbox')
            ing.checked = false
        })
        }

        
        
    fetchAndLoadBobas(){  
        this.adapter
        .getBobas()
        .then(bobas => {
            bobas.forEach(boba => {
                const newBoba = new Boba(boba)
                this.bobas.push(newBoba)
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
            this.bobas.map(boba => {
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
        <br>Ingredients: ${this.ingredients.map(ingredients => ingredients.name).join(', ')}<br>
        <span class="like-button" id="like-${this.id}"  onClick="like()" >0</span>
        `

        // <p> <a id="likes">0</a></p>
        // <button type="button" onClick="like()">Click me</button>
        // <p>Clicks: <a id="clicks">0</a></p>
        //increment like button, add number to each number for likes, start from 0

        const likeButton = document.createElement('button')
        likeButton.innerHTML = 'like'
        likeButton.id = this.id
        likeButton.addEventListener('click', this.like)
        li.appendChild(likeButton)

        const deleteBobaButton = document.createElement('button')
        deleteBobaButton.innerText = 'delete boba'
        deleteBobaButton.id =this.id
        deleteBobaButton.addEventListener('click',this.deleteBoba)
        li.appendChild(deleteBobaButton)
        return li
    }
     
    like(){
        var likey = document.getElementById(`like-${this.id}`)
        var a = parseInt(likey.innerHTML)
        likey.innerHTML = ++a
    };
    deleteBoba(ev) {
         return fetch('http://localhost:3000/api/v1/bobas' + '/' + ev.target.id, {
           method: 'DELETE'
         })
         .then(response => response.json())
         .then(response => {
            const test = document.getElementById(`${response.id}`)
            test.remove()
       })
       }
    

    

}

class Ingredient {
    constructor(ingredientJSON){
        this.id = ingredientJSON.id
        this.name = ingredientJSON.name
    }

    renderCheckbox(){
        return `<input type="checkbox" name=${this.name} value= ${this.id} id= "checkboxes" >
                <label>${this.name}</label>` 
    }
    
}



