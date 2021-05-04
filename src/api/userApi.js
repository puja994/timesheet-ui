import axios from 'axios'
const rootUrl = 'http://localhost:3001/v1/'
const loginUrl = rootUrl + "user/login"
export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(loginUrl, frmData);
        resolve(res.data);

      } catch (error) {
        reject(error);
      }
    });
  };