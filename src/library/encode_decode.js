import { Base64 } from 'js-base64';
function string_encode(str){
    var encodedString = Base64.encode(Base64.encode(Base64.encode(str)));
    return encodedString;
}
function string_decode(str){
    var decodedString = Base64.decode(Base64.decode(Base64.decode(str)));
    return decodedString;
}

export default{
    string_encode,
    string_decode
}