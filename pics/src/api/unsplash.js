import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8UdU-tgzaZ9GPUUTznhucvykZ8-qUDj3U1n7T-vGXLM'
  }
});