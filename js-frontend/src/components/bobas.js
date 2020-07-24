class Bobas {
    constructor(){
        this.bobas = []
        this.adapter = new BobasAdapter()
        this.initiBindingsAndEventlistners()
        this.fetchAndLoadBobas()
    }

    initiBindingsAndEventlistners(){
        this.bobasContainer = document.getElementById('bobas-container')
        this.newBobaBody = document.getElementById('new-boba-body')
        this.bobaForm = document.getElementById('new-boba-form')
        this.bobaForm.addEventListener('submit',this.createBoba.bind(this))
        // question:where did bobaForm got defined?
    }

    createBoba(e){
        e.preventDefault()
        const value = this.newBobaBody.value
        this.adapter.createBoba(value).then(boba => {
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
    render(){     
            this.bobasContainer.innerHTML = this.bobas.map(boba => boba.renderLi()).join('')
        }
}

class Boba {
    constructor(bobaJSON){
        this.id = bobaJSON.id
        this.name = bobaJSON.name
        this.flavor = bobaJSON.flavor
    }

    renderLi(){
        return `<li>Boba Name: ${this.name}<br>Tea Flavor: ${this.flavor}<br>Ingredients:</li>`
    }
    
}

// create new boba instance as i ittirate over boba array



//     show(){

//     }
//     create(){

//     }

//     addIngredient(){

//     }

// }

// add/remove class, 
// when boba component is created, it sets various variables and calls couple of boba
// calls to backend api
//a container that contains all the bobas
