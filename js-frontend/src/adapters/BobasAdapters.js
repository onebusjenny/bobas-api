class BobasAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/vi/bobas'
    }

    getBobas(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}
