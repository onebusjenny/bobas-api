class BobasAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/bobas'
    }

    getBobas(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createBoba(name,flavor,ingredient_ids){
        const boba = {
            name: name,
            flavor: flavor,
            ingredient_ids: ingredient_ids
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify({boba})
        })
        .then(res => res.json())   
        }
    }
    
// communicate with api
  class IngredientAdapter{
        constructor(){
            this.baseUrl = 'http://localhost:3000/api/v1/ingredients'
    }

    getIngredients(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }








//   static getIngredients(){
//     return fetch('http://localhost:3000/api/v1/ingredients')
//     .then(res => res.json()
//     .then(ingArray => {ingArray.forEach(ingredient)
//         debugger

//         var checkbox = document.createElement('input');
//         checkbox.type = "checkbox"
//         checkbox.name = "boba[ingredient-ids][]"
//         checkbox.value = ingredient.id
//         checkbox.id = "ingredient-id"

//         var label = document.createElement('label')
//         label.innerHTML = ingredient.name
//         const new_boba_form = document.getElementById('new-boba-form')
//         new_boba_form.append(label,checkbox)
        


//         //dynamicly check boxes, using the ingredient array date //iterate through array
//         //place in the index.html()
//     })
//     )
//         }   
  }
  
  