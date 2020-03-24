import axios from 'axios';

const KEY = 'AIzaSyBnDoFd2Yuwu-W2Uv5wLAYbEi14-HJzPiA';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
youtube.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['part'] = 'snippet';
    config.params['maxResults'] = 5;
    config.params['video'] = 'video';
    config.params['key'] = KEY;
    return config;
});

export default youtube;