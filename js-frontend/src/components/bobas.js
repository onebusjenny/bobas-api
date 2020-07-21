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
            return console.log(bobas) 
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        const bobasContainer = document.getElementById('bobas-container')
        bobasContainer.innerHTML = 'boba is here'
    }

}

// when boba component is created, it sets various variables and calls couple of boba
// calls to backend api