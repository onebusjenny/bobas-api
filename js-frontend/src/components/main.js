class Boba {
    static all = []
    constructor(bobaJSON){
        this.id = bobaJSON.id
        this.name = bobaJSON.name
        this.flavor = bobaJSON.flavor
        this.adapter = new BobasAdapter()
        all << this 
    }

    renderBoba(){
        return `<li>Boba Name: ${this.name}<br>Tea Flavor: ${this.flavor} </li>`
    }

    static createBoba(e){
        e.preventDefault()
        const bobasContainer = document.getElementById('bobas-container')
        const bobaName = document.getElementById('boba-name')
        const bobaFlavor = document.getElementById('boba-flavor')
        
        const bobaIngredient = document.getElementById('ingredient-id')
                //grab ingredient ids
        
        
        const name = bobaName.value
        const flavor = bobaFlavor.value
        const ingredient_ids = //array of ids(only the one that's checked)
        this.adapter.createBoba(name,flavor).then(boba => {
            console.log(boba)
        })
    
    }
}
