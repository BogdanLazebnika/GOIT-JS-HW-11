import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "41008459-ae85a0f4e5ddecc4605e9c5b1"; // твій ключ Pixabay

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
