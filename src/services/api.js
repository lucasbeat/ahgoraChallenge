import axios from "axios";

const KEY = ""; // INSIRA A CHAVE AQUI

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY,
  },
});

export default youtube;
