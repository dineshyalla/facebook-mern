import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://facebook-mern-clone-dinesh.herokuapp.com',
});

export default instance;
