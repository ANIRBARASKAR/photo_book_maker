import React, { useEffect,useState } from 'react'
import { fabric } from 'fabric';
export default function DetectColor() {
   
  const imgUrl = "https://images.unsplash.com/photo-1511268011861-691ed210aae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"


    useEffect (() => {
      var canvas = new fabric.Canvas('c');
fabric.Image.fromURL('your-image.jpg', function(img) {
  canvas.add(img);
  var imageData = canvas.contextContainer.getImageData(img.left, img.top, img.width, img.height);
  var pixelData = imageData.data;
  var pixelIndex = (100 + (100 * imageData.width)) * 4; // x=100, y=100
  var red = pixelData[pixelIndex];
  var green = pixelData[pixelIndex + 1];
  var blue = pixelData[pixelIndex + 2];
  var alpha = pixelData[pixelIndex + 3];
});
    },[])
  return (
    <div>DetectColor 

    <canvas id='c' height={400} width={400} style={{border:"2px solid red"}}></canvas>
    <img id='my-img' src={imgUrl} alt="" />
    {/* <img id='imgID' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAB5CAMAAACdtUQZAAAAA1BMVEX/AAAZ4gk3AAAAMElEQVR4nO3BMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GmYYAAGiFkejAAAAAElFTkSuQmCC" alt="" /> */}
    </div>
  )
} 

