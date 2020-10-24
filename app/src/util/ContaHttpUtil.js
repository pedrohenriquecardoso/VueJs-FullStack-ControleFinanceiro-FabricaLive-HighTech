const API_URL_ALL = "http://localhost:3000/conta/all"
const API_URL = "http://localhost:3000/conta"

import axios from "axios";

export default {
    async buscarTodos(){
        return axios.get(API_URL_ALL).then((response) => response.data)
    },
    async adicionar(conta){
        return axios.post(API_URL, conta).then((response) => response)
    },
    async deletar(conta){
        return axios.delete(API_URL + "/" + conta._id, conta).then((response) => response)
    }
}