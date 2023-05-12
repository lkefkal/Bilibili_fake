import {HOST_NAME} from '../config/config.js';
export function CallApi({path, method, data}){
  return new Promise((resolve, reject) => {
    const info = {
      method,
      header:{
        'Content-type': 'application/json'
      },
      body: data ? JSON.stringify(data) : undefined
    };
    fetch(HOST_NAME + path, info)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          reject(data.error)
        } else {
          resolve(data)
        }
      })
      .catch(err => console.log(err))
  })
}