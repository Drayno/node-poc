import axios from 'axios';


const baseURL: string = `http://localhost:3000`;

const instance = axios.create({
  baseURL,
});

export default instance;