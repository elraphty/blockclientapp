import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://blockland.herokuapp.com/cl',
    timeout: 5000
})

export const POST = (link, body, token) => {
    return instance.post(`${link}`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        }
    })
}

export const GET = (link, token) => {
    return instance.get(`${link}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        }
    });
}

