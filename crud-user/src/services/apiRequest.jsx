import axios from 'axios';

const Api = axios.create({
    baseURL: ' https://blog-api-t6u0.onrender.com/posts'
})

// Add user
export const addUser = async (newUser) => {
    try {
        const response = await Api.post("/", newUser)
        if (response.status !== 201) {
            throw new Error("Error")
        }
        else {
            return response.data
        }
    }
    catch (error) {
        console.log(error)
    }
}