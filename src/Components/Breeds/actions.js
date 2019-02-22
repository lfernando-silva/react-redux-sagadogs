import axios from "axios";

export function fetchBreeds() {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/list/all"
    });
}

export function fetchBreed(breed){
    // https://dog.ceo/api/breed/hound/images
    return axios({
        method: "get",
        url: `https://dog.ceo/api/breed/${breed}/images`
    });
}