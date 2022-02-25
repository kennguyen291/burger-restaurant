import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://challenge.lexicondigital.com.au/api/v2/",
});

export default axiosClient;
