import axios from 'axios'
import apiUrl from '../apiConfig'

export const index = (user) =>{
    return axios({
    url:apiUrl + '/workshops',
    method: 'GET',
    headers: {
        "Authorization":`Bearer ${user.token}`
    }

    })
}
export const show = (user , workshopId) =>{
    return axios({
        url:apiUrl + `/workshop ${workshopId}` ,
        method: 'GET' ,
        headers: {
            "Authorization" : `Bearer ${user.token}`
        }
    })
}

export const destroy = (user,workshopId) =>{
    return axios ({
        url:apiUrl + `/workshops/${workshopId}` ,
        method: 'DELETE' ,
        headers: {
            "Authorization" : `Bearer ${user.token}`
        }
    })
}

export const create = (user,newWorkshop)=>{
    return axios ({
        url:apiUrl + '/workshops',
        method: 'POST',
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{workshop: newWorkshop}
    })
}

export const update = (user , workshopId ,updateWorkshop) => {
    return({
        url:apiUrl + `/workshops ${workshopId}`,
        method: 'PATCH',
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data: {workshop : updateWorkshop}
    })
}
