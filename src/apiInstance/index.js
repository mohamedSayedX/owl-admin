import axios from 'axios';
import { LOCAL_BASE_URL } from '../contexts';




const Axios = async ({ method, contentType, data, url }) => {
  const accessToken = localStorage.getItem('gameXUser');
  const req = await axios.request({
    method,
    baseURL: `${LOCAL_BASE_URL}${url}`,
    data,
    timeout: 500000,
    headers: {
      'Content-Type': contentType ?? 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return req?.data;
};
export default Axios;
