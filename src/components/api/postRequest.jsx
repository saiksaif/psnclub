import axios from 'axios';
import { baseURL } from '../../utils/constant';

export const postRequest = (url, data) => {
    return axios.post(`${baseURL}/${url}`, data,
        // {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     }
        // }
    ).then((response) => {
        console.log("Data from Database is: " + response.data)
        return response.data
    }).catch(error => {
        console.log("Error in Getting Data :" + error);
        return ("Error in Getting Data :" + error)
    });
}
