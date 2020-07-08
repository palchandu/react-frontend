import React from 'react';
function ShowDetail() {
  var height=window.innerHeight*0.82;
  var width=window.innerWidth;
  var loaderStyle={
    height:height,
  }
  var imageStyle={
    marginTop:height*0.45,
    marginLeft:width*0.45
  }
  return (
    <div  className="loader center" style={loaderStyle}>
      <img  style={imageStyle} src={process.env.PUBLIC_URL + '/images/spinner.gif'} /> 
    </div>
  );
}

export default ShowDetail;
