import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8080'
})

export async function getRequest(url) {
    const response = await axiosClient.get(url)
        .then(response => response)
        .catch(err => console.log(err))

    return response.data
}

export async function postRequest(url, payload) {
    const response = await axiosClient.post(url, payload)
        .then(response => response)
        .catch(err => console.log(err))
    return response
}

export async function putRequest(url, payload) {
    const response = await axiosClient.put(url, payload)
        .then(response => response)
        .catch(err => console.log(err))
    return response
}

export async function deleteRequest(url) {
    const response = await axiosClient.delete(url)
        .then(response => response)
        .catch(err => console.log(err))
    return response
}