import config from '../config/config';
import axios from 'axios';
const headers = {
    'Content-Type': 'application/json',
    'x-access-token': '14a08bec-8711-49f5-ba2d-3625857bec62',
    'request-type'  : 'public'
  }

function getWebsiteInfo(){
    return new Promise((resolve,reject)=>{
        axios.get(config.api_path+'/v2/mywebsite/get_all_info',{headers:headers}).then((response)=>{
            resolve(response);
        }).catch((error)=>{
            reject(error)
        })
    })
}

export default {
    getWebsiteInfo
}