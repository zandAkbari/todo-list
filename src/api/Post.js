import axios from 'axios';

export default {
    getPosts() {
        return axios({
            method: "Get",
            url: "https://jsonplaceholder.typicode.com/posts",
        }).then(response => {

            return response
        }).catch(response => {
            console.log("code catch", response)
        });
    }}


