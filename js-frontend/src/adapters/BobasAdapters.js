class BobasAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/bobas'
    }

    getBobas(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createBobas(boba){
        return fetch(this.baseUrl,{
            method:POST, 
            headers:{"content-type":"application/json"},
            body: JSON.stringify({boba:
                {
                name: boba.name,
                flavor: boba.flavor,
                ingredient: [1,2,3,4,5,6]
            }})
        })

    }
}

// communicate with api