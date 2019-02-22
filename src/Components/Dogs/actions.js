import axios from "axios";

// function that makes the api request and returns a Promise for response
export function fetchRandomDog() {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    });
}