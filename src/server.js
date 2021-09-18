import axios from 'axios'
export default axios.create({
    baseURL:'https://api.ghesti.cards/purchasecustomer',
    headers:{
        'Content-Type':'application/grpc',
        'Authorization':'Bearer accesstoken11_25'
    }
})