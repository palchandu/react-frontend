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

function getContactDetails(){
    return new Promise((resolve,reject)=>{
        axios.get(config.api_path+'/v2/contact/get_contacts_details',{headers:headers}).then((response)=>{
            resolve(response);
        }).catch((error)=>{
            reject(error)
        })
    })
}

function addEnquiry(data){
    return new Promise((resolve,reject)=>{
        axios.post(config.api_path+'/v2/contact/add_enquiry',data,{headers:headers}).then((response)=>{
            resolve(response);
        }).catch((error)=>{
            reject(error)
        })
    })
}
function post_listing(query){
    var key='';
    if(query.seacrh && query.seacrh!=null){
        key='?search='+query.seacrh
    }
    if(query.category && query.category!=null){
        key='?category='+query.category
    }
    return new Promise((resolve,reject)=>{
        axios.get(config.api_path+'/v2/posts_comments/post_listing_short'+key,{headers:headers}).then((response)=>{
            resolve(response);
        }).catch((error)=>{
            reject(error)
        })
    })
}
function post_single(title,post_id){
    return new Promise((resolve,reject)=>{
        axios.get(config.api_path+'/v2/posts_comments/post_detail/'+title+'/'+post_id,{headers:headers}).then((response)=>{
            resolve(response);
        }).catch((error)=>{
            reject(error)
        })
    })
}
function post_latest(){
    return new Promise((resolve,reject)=>{
        axios.get(config.api_path+'/v2/posts_comments/latest_posts',{headers:headers}).then((response)=>{
            resolve(response);
        }).catch((error)=>{
            reject(error)
        })
    })
}
export default {
    getWebsiteInfo,
    getContactDetails,
    addEnquiry,
    post_listing,
    post_single,
    post_latest
}