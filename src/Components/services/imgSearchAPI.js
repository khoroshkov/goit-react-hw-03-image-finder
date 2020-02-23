import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const key = "15341252-d98da9da1eab29ae79b0f2c1a";

export const fetchImages = (query, page) =>
  axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
