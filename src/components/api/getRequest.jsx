import axios from 'axios';
import { baseURL } from '../../utils/constant';



export const getRequest = (url) => {
    let tokenInLocalStorage = localStorage.getItem('userToken')

    return axios.get(`${baseURL}/${url}`, {
        headers: {
            "x-access-token": tokenInLocalStorage
        }
    }).then((response) => {
        console.log("Data from Database is: " + response.data)
        return response.data
    }).catch(error => {
        console.log("Error in Getting Data of Cart :" + error);
        return ("Error in Getting Data of Cart :" + error)
    });
}
