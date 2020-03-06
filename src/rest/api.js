import axios from 'axios';
import Config from '../constants/config';
import Storage from './storage';
const API_URL = __DEV__ ? Config.url_dev : Config.url_prod;

const api = async (ENDPOINT, params = {}, method = 'GET') => {
  const user_token = await Storage.getItem('user_token');
  const user_latitude = await Storage.getItem('user_latitude');
  const user_longitude = await Storage.getItem('user_longitude');
  let url = API_URL + ENDPOINT;

  if (!params.skipLocation) {
    params.latitude = user_latitude;
    params.longitude = user_longitude;
  }

  const req = {
    method,
    url: url,
    params: params,
    timeout: 60000,
    body: params,
  };
  if (params.uploadFile) {
    req.data = params;
    req.headers = {
      Authorization: 'Bearer ' + user_token,
      'Content-Type': 'multipart/form-data',
    };
  } else if (user_token) {
    req.headers = {
      Authorization: 'Bearer ' + user_token,
    };
  }
  return await axios(req).catch(err => {
    throw err;
  });
};

export default api;
