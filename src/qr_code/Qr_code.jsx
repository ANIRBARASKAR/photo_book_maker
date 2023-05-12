// import React from 'react'
// import QRCode from 'qrcode'
// import { fabric } from 'fabric';
// export default function Qr_code() {

//   const test = () => {
//     var canvas = new fabric.Canvas('canvas');


// QRCode.toDataURL('http://jindo.dev.naver.com/collie', (err, url) => {
// const imgElement = new Image();
// imgElement.src = url;
// const qrCodeImage = new fabric.Image(imgElement, {
// width: 100,
// height: 100,
// left: 50,
// top: 50
// });
// canvas.add(qrCodeImage);
// });
//   }



//   const test2 = () => {
//     // Create a new canvas element
// var canvas = new fabric.Canvas('qr-canvas');

// // Generate QR code using a third-party library
// var qrcode = new QRCode("qr-canvas", {
//   text: "www.example.com",
//   width: 200,
//   height: 200,
//   colorDark : "#000000",
//   colorLight : "#ffffff",
//   correctLevel : QRCode.CorrectLevel?.H
// });

// // Convert the QR code to an image
// var img = qrcode.toDataURL("image/png");

// // Create an image object in fabric.js
// var qrImage = new fabric.Image(img, {
//   width: 200,
//   height: 200
// });

// // Add the image object to the canvas
// canvas.add(qrImage);
//   }

//   test()
//   test2()
//   return (
//     <div>Qr_code
//         <canvas id='canvas' height={400} width={400} style={{border:"2px solid red"}}></canvas>
//         <canvas id='qr-canvas' className='ms-5' height={400} width={400} style={{border:"2px solid green"}}></canvas>

//     </div>
//   


import React, { useEffect } from 'react'
import { fabric } from 'fabric';
import  QRCode from "qrcode"
function Qr_code() {
  // var QRCode = require('qrcode');


 useEffect(() => {
  var canvas = new fabric.Canvas('canvas');

  QRCode.toDataURL('https://www.wtpbiz.com/', function (err, url) {
    console.log(url,"url")
    // alert(url)
    fabric.Image.fromURL(url, function (img) {
      img.set({
        left: 10,
        top: 10,
        angle: 0,
        padding: 10,
        cornersize: 10,
        fill:"red"
      });
      canvas.add(img);
    });
  
 })
  // object Moving outside alert
// // 1 not working
//   canvas.on('object:moving', function(e) {
//     var obj = e.target;
  
//     if (!canvas.isTargetInsideVisibleArea(obj)) {
//       alert("Object is moving outside of the canvas");
//       obj.left = canvas.width / 2;
//       obj.top = canvas.height / 2;
//     }
//   });

// 2 
canvas.on('object:moving', function(e) {
  // alert("canvas on ")
  var obj = e.target;

  console.log("obj.left",obj.left,"canvas.width",canvas.width,"obj.left",obj.left," obj.top", obj.top,"canvas.height",canvas.height,"obj.top",obj.top,"obj.height",obj.height)
  

  if (obj.left > canvas.width || obj.left + obj.width < 0 || obj.top > canvas.height || obj.top + obj.height < 0) {
    // alert("Object is moving outside of the canvas");
    obj.left = canvas.width / 2;
    obj.top = canvas.height / 2;
  }
});
});
  return (
    <div>
            <canvas id='canvas' height={400} width={400} style={{border:"2px solid red"}}></canvas>

    </div>
  )
}

export default Qr_code

