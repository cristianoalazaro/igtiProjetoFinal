import axios from 'axios';

//Define a URL base da origem para consumo do serviço
export default axios.create({
    //baseURL:
    baseURL:'https://localhost:api/transaction',
    headers:{
        'Content-type':'applicatioon.json',
    },
});

