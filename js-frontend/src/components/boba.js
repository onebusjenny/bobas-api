class Bobas {
    constructor(bobaJSON){
        this.id = bobaJSON.id
        this.name = bobaJSON.name
        this.flavor = bobaJSON.flavor
    }
    render(){
        const bobasString = console.log(bobasString)
        const bobasContainer = document.getElementById('bobas-container')
        bobasContainer.innerHTML = this.bobas.map(boba => `<li>${boba.name}</li>`).join('')
    }
}

// create new boba instance as i ittirate over boba array