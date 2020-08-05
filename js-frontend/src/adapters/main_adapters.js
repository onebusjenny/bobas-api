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
  }
  
  