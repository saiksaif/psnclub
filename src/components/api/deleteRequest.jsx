import axios from 'axios';
import { baseURL } from '../../utils/constant';



export const deleteRequest = (url, id) => {
    let tokenInLocalStorage = localStorage.getItem('userToken')

    return axios.delete(`${baseURL}/${url}/${id}`, {
        headers: {
            "x-access-token": tokenInLocalStorage
        }
    }).then((response) => {
        console.log("Data from Database is Deleted: " + response.data)
        return response.data
    }).catch(error => {
        console.log("Error in deleting Data of Cart :" + error);
        return ("Error in deleting Data of Cart :" + error)
    });
}
