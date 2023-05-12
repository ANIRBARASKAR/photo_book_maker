


import React, {useState, useEffect } from 'react'
import { fabric } from 'fabric';
import  QRCode from "qrcode"
function Objrct_moving_outside() {
  // var QRCode = require('qrcode');
 
//   const [show_alert, set_show_alert]=useState(true)
var show_alert;
var set_data_in_QRcode = 'https://www.wtpbiz.com/'

 useEffect(() => {
  var canvas = new fabric.Canvas('canvas');
// ************* QRCode 
  QRCode.toDataURL(set_data_in_QRcode, function (err, url) {
    console.log(url,"url")

    fabric.Image.fromURL(url, function (img) {
      img.set({
        left: 200,
        top: 100,
        angle: 0,
        padding: 10,
        cornersize: 10
      });
      canvas.add(img);
    });

    let clipPathTopLeft = new fabric.Rect({
        width: 100,
        height: 100,
        left: 200,
        top: 240,
        stroke: "blue",
        strokeWidth: 3,
        strokeDashArray: [5, 5],
        fill: "rgba(255,255,255,0.2)",
        // selectable: true,
        isClipFrame: true });
        canvas.add(clipPathTopLeft)
  
 })

//  
fabric.Image.fromURL('https://images.unsplash.com/photo-1675203292851-b7f84d2459ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=60', function(img) {
        canvas.add(img);
        
      });

//  
  
// **************  object moving outside of canvas 
var flag = false;

canvas.on('object:moving', function(e) {
  var obj = e.target;
    // console.log("obj.left",obj.left,"obj.width",obj.width,"canvas.width",canvas.width,"obj.left + obj.width > canvas.width",obj.left + obj.width > canvas.width," obj.top", obj.top,"canvas.height",canvas.height,"obj.top + obj.height > canvas.height",obj.top + obj.height > canvas.height,"obj.height",obj.height)

  if (obj.left < 0 || obj.top < 0 || obj.left + obj.width > canvas.width || obj.top + obj.height > canvas.height) {
    if (!flag) {
      alert('Object moved outside of canvas');
      flag = true;
    }
  }
});

canvas.on('mouse:down', function(e) {
  flag = false;
});
},[]);
  return (
    <div>
    {show_alert}
       <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-3 mt-5">
          <canvas id='canvas' height={400} width={400} style={{border:"2px solid red"}}></canvas>

          </div>
          {/* <div className="col-sm-6 offset-3 mt-5">
          <canvas id='canvas2' height={300} width={400} style={{border:"2px solid red"}}></canvas>

          </div> */}
        </div>
       </div>
    </div>
  )
}  

export default Objrct_moving_outside

