class BobasAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/bobas'
    }

    getBobas(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    getIngredients(){
        return fetch(this.baseUrl)
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



//     {
            //     // name: boba.name,
            //     // flavor: boba.flavor
            // }




    // createBobas(value){
    //     return fetch(this.baseUrl,{
    //         method:'POST', 
    //         headers:{"content-type":"application/json"},
    //         body: JSON.stringify({boba:
    //             {
    //             name: boba.name,
    //             flavor: boba.flavor,
    //             ingredient: [1,2,3,4,5,6]
    //         }})
    //     })

    // }
}

// communicate with api

   