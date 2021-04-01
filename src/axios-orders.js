import axios from "axios"

const instance = axios.create({
    baseURL: "https://react-my-burger-b10fc.firebaseio.com/"
})

export default instance;