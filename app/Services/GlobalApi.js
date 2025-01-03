import axios from "axios"

const BASE_URL='https://192.168.1.35:3001/api/bardapi'

const getBardApi=(userMsg)=>axios.get(BASE_URL+"?ques="+userMsg)

export default{
    getBardApi
}