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
            const newBoba = new Bobas(boba)
            this.bobas.push(newBoba)
            newBoba.render
            
            // iterate and then push indivisual object into []
            // console.log(this.bobas)
        
        })
    })
    }
}



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
