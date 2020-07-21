class Bobas {
    constructor(){
        this.bobas = []
        this.adapter = new BobasAdapter
        // this.bindEventlistners()
        this.fetchAndLoadBobas()
    }

    fetchAndLoadBobas(){
        this.adapter.getBobas().then(bobas => {
            console.log(bobas)
        })
    }

}

// when boba component is created, it sets various variables and calls couple of boba
// calls to backend api