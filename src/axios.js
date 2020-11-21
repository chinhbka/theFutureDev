import axios from "axios";

const instance = axios.create({
  baseURL: "https://elearning0706.cybersoft.edu.vn/api",
  //baseURL: "http://virtserver.swaggerhub.com/theFutureDev/edTech4PeopleApi/1.0.0",
});

export default instance;
