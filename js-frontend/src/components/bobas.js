class Bobas {
    constructor(){
        this.bobas = []
        this.adapter = new BobasAdapter()
        // this.bindEventlistners()
        this.fetchAndLoadBobas()
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
            const bobasContainer = document.getElementById('bobas-container')
            bobasContainer.innerHTML = this.bobas.map(boba => `<li>${boba.name}<br>${boba.flavor}</li>`).join('')
        }
}

class Boba {
    constructor(bobaJSON){
        this.id = bobaJSON.id
        this.name = bobaJSON.name
        this.flavor = bobaJSON.flavor
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
