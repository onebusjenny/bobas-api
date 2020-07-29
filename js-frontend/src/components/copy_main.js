class Bobas {
    constructor(){
        this.bobas = []
        this.adapter = new BobasAdapter()
        this.initiBindingsAndEventlistners()
        this.fetchAndLoadBobas()
    }

    initiBindingsAndEventlistners(){
       
        this.bobaForm = document.getElementById('new-boba-form')
        this.bobaForm.addEventListener('submit',this.createBoba.bind(this))
        // send back the check ids
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
    render(){     
            this.bobasContainer.innerHTML = this.bobas.map(boba => boba.renderBoba()).join('')
        }


// class Boba {
//     static all = []
//     static adapter = new BobasAdapter()
//     constructor(bobaJSON){
//         this.id = bobaJSON.id
//         this.name = bobaJSON.name
//         this.flavor = bobaJSON.flavor
//         all << this 
//     }

//     renderBoba(){
//         return `<li>Boba Name: ${this.name}<br>Tea Flavor: ${this.flavor} </li>`
//     }

//     createBoba(e){
//         e.preventDefault()
//         const bobasContainer = document.getElementById('bobas-container')
//         const bobaName = document.getElementById('boba-name')
//         const bobaFlavor = document.getElementById('boba-flavor')
//         const bobaIngredient = docutment.getElementById('ingredient-id')
//                 //grab ingredient ids
//         debugger
        
//         const name = bobaName.value
//         const flavor = bobaFlavor.value
//         const ingredient_ids = //array of ids(only the one that's checked)
//         Boba.adapter.createBoba(name,flavor).then(boba => {
//             console.log(boba)
//         })
    
// }

// // class Ingredient {
// //     constructor(ingredientJSON){
// //         this.id = ingredientJSON.id
// //         this.name = ingredientJSON.name
// //     }
    
// //     renderLe(){
// //         return `<li>Ingredients: ${this.name}</li>`
// //     }
// // }

// // class Ingredients {
// //     constructor(ingredientJSON){
// //         this.id = ingredientJSON.id
// //         this.name = ingredientJSON.name
// //     }

// //     renderIngredient(){
// //         return `<li>Ingredient: ${this.name}</li>`
// //     }
// // }
// // create new boba instance as i ittirate over boba array
