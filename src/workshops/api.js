import axios from 'axios'
import apiUrl from '../apiConfig'

export const index = (user) =>{
    return axios({
    url:apiUrl + '/workshops',
    method: 'get',
    headers: {
        "Authorization":`Bearer ${user.token}`
    }

    })
}
export const show = (id) =>{
    return axios({
        url:apiUrl + '/workshop'+ id ,
        method: 'get' ,
        headers: {
            "Authorization" : `Bearer ${id.token}`
        }
    })
}

