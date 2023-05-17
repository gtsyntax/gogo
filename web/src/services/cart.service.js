import axios from "axios"
const API_URL = "/api/api/carts"

export const getUserCart = async (userId) => {
    const response = await axios.get(`${API_URL}/by_user/${userId}`)
    const formattedReponse = await response.data
    return formattedReponse
}