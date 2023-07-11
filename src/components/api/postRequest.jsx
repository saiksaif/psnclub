import axios from 'axios';
import { baseURL } from '../../utils/constant';

export const postRequest = (url, data) => {
    let tokenInLocalStorage = localStorage.getItem('userToken')

    console.log("Post Request got Data:" + data)
    return axios.post(`${baseURL}/${url}`, data, {
        headers: {
            "x-access-token": tokenInLocalStorage
        }
    }
    ).then((response) => {
        console.log("Data from Database is: " + response.data)
        return response.data
    }).catch(error => {
        console.log("Error in Getting Data :" + error);
        return ("Error in Getting Data :" + error)
    });
}
