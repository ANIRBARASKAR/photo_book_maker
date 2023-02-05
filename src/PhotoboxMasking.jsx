import React,{useEffect} from 'react'
import { fabric } from 'fabric';
export default function PhotoboxMasking() {

    var canvas = new fabric.Canvas('canvas');
    var canvas2 = new fabric.Canvas('canvas2');
const test = () => { 
     
// orignal
// fabric.Image.fromURL('https://cdn.pixabay.com/photo/2023/01/24/10/30/gearstick-7740670__340.jpg', function(img) {
// fabric.Image.fromURL('https://images.unsplash.com/photo-1675241814067-e599afe3630c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60', function(img) {
//   img.set({
//     left: 0,
//     top: 0,
//     angle: 0,
//     opacity: 1,
//     clipPath: new fabric.Circle({
//       radius: 180,
//       left: -200,
//       top: -300
//     })
//   });
//   canvas2.add(img);
// });


// *************** new path trying ***************//
var path = new fabric.Path('M85.6,606.2c-13.2,54.5-3.9,95.7,23.3,130.7c27.2,35-3.1,55.2-25.7,66.1C60.7,814,52.2,821,50.6,836.5c-1.6,15.6,19.5,76.3,29.6,86.4c10.1,10.1,32.7,31.9,47.5,54.5c14.8,22.6,34.2,7.8,34.2,7.8c14,10.9,28,0,28,0c24.9,11.7,39.7-4.7,39.7-4.7c12.4-14.8-14-30.3-14-30.3c-16.3-28.8-28.8-5.4-33.5-11.7s-8.6-7-33.5-35.8c-24.9-28.8,39.7-19.5,62.2-24.9c22.6-5.4,65.4-34.2,65.4-34.2c0,34.2,11.7,28.8,28.8,46.7c17.1,17.9,24.9,29.6,47.5,38.9c22.6,9.3,33.5,7.8,53.7,21c20.2,13.2,62.2,10.9,62.2,10.9c18.7,6.2,36.6,0,36.6,0c45.1,0,26.5-15.6,10.1-36.6c-16.3-21-49-3.1-63.8-13.2c-14.8-10.1-51.4-25.7-70-36.6c-18.7-10.9,0-30.3,0-48.2c0-17.9,14-31.9,14-31.9h72.4c0,0,56-3.9,70.8,26.5c14.8,30.3,37.3,36.6,38.1,52.9c0.8,16.3-13.2,17.9-13.2,17.9c-31.1-8.6-31.9,41.2-31.9,41.2c38.1,50.6,112-21,112-21c85.6-7.8,79.4-133.8,79.4-133.8c17.1-12.4,44.4-45.1,62.2-74.7c17.9-29.6,68.5-52.1,113.6-30.3c45.1,21.8,52.9-14.8,52.9-14.8c15.6,2.3,20.2-17.9,20.2-17.9c20.2-22.6-15.6-28-16.3-84c-0.8-56-47.5-66.1-45.1-82.5c2.3-16.3,49.8-68.5,38.1-63.8c-10.2,4.1-53,25.3-63.7,30.7c-0.4-1.4-1.1-3.4-2.5-6.6c-6.2-14-74.7,30.3-74.7,30.3s-108.5,64.2-129.6,68.9c-21,4.7-18.7-9.3-44.3-7c-25.7,2.3-38.5,4.7-154.1-44.4c-115.6-49-326,29.8-326,29.8s-168.1-267.9-28-383.4C265.8,13,78.4-83.3,32.9,168.8C-12.6,420.9,98.9,551.7,85.6,606.2z');



fabric.Image.fromURL('https://images.unsplash.com/photo-1675241814067-e599afe3630c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60', function(img) {
  img.set({
    left: 0,
    top: 0,
    angle: 0,
    opacity: 1,
    // clipPath: new fabric.Rect({
    //     width: 150,
    //     height: 150,
    //     left: 50,
    //     top: 50,
    // })
    clipPath: new fabric.Circle({
              radius: 180,
              left: -200,
              top: -300
            })

    
  });
  canvas2.add(img);
});





// ************************  Create a new fabric.Text object
// var text = new fabric.Text('Hello, World!', {
//     left: 100,
//     top: 100,
//     fontSize: 30,
//     fill: '#000'
//   });
    
//   // Add the text object to the canvas
//   canvas.add(text);
   



}

useEffect(() => {
    test()

const test2 = () => {
    // Create an SVG path
// var path = new fabric.Path('M10,10 L200,10 L200,200 z');
var path = new fabric.Path('M85.6,606.2c-13.2,54.5-3.9,95.7,23.3,130.7c27.2,35-3.1,55.2-25.7,66.1C60.7,814,52.2,821,50.6,836.5c-1.6,15.6,19.5,76.3,29.6,86.4c10.1,10.1,32.7,31.9,47.5,54.5c14.8,22.6,34.2,7.8,34.2,7.8c14,10.9,28,0,28,0c24.9,11.7,39.7-4.7,39.7-4.7c12.4-14.8-14-30.3-14-30.3c-16.3-28.8-28.8-5.4-33.5-11.7s-8.6-7-33.5-35.8c-24.9-28.8,39.7-19.5,62.2-24.9c22.6-5.4,65.4-34.2,65.4-34.2c0,34.2,11.7,28.8,28.8,46.7c17.1,17.9,24.9,29.6,47.5,38.9c22.6,9.3,33.5,7.8,53.7,21c20.2,13.2,62.2,10.9,62.2,10.9c18.7,6.2,36.6,0,36.6,0c45.1,0,26.5-15.6,10.1-36.6c-16.3-21-49-3.1-63.8-13.2c-14.8-10.1-51.4-25.7-70-36.6c-18.7-10.9,0-30.3,0-48.2c0-17.9,14-31.9,14-31.9h72.4c0,0,56-3.9,70.8,26.5c14.8,30.3,37.3,36.6,38.1,52.9c0.8,16.3-13.2,17.9-13.2,17.9c-31.1-8.6-31.9,41.2-31.9,41.2c38.1,50.6,112-21,112-21c85.6-7.8,79.4-133.8,79.4-133.8c17.1-12.4,44.4-45.1,62.2-74.7c17.9-29.6,68.5-52.1,113.6-30.3c45.1,21.8,52.9-14.8,52.9-14.8c15.6,2.3,20.2-17.9,20.2-17.9c20.2-22.6-15.6-28-16.3-84c-0.8-56-47.5-66.1-45.1-82.5c2.3-16.3,49.8-68.5,38.1-63.8c-10.2,4.1-53,25.3-63.7,30.7c-0.4-1.4-1.1-3.4-2.5-6.6c-6.2-14-74.7,30.3-74.7,30.3s-108.5,64.2-129.6,68.9c-21,4.7-18.7-9.3-44.3-7c-25.7,2.3-38.5,4.7-154.1-44.4c-115.6-49-326,29.8-326,29.8s-168.1-267.9-28-383.4C265.8,13,78.4-83.3,32.9,168.8C-12.6,420.9,98.9,551.7,85.6,606.2z');

path.set({
  fill: 'yellow',
  stroke: 'green',
  top: 0,
    left: 180,
    fixed: true,
    fill: 'blue', 
    stroke: '',
    scaleX: 0.2,
    scaleY: 0.2  
});
 
// Create a rectangle to be masked
var rect = new fabric.Rect({
  width: 200,
  height: 200,
  left: 0,
  top: 0,
  fill: 'red' 
});

// Set the path as the clip path for the rectangle
rect.clipPath = path;

// Add the objects to the canvas
canvas.add(rect);  
canvas.add(path);
}


test2()    
})
    
  return (
    <div className='m-5'>
    <div className="d-flex justify-content-around">
    <canvas id='canvas' height={400} width={400} style={{border:'2px solid green'}}></canvas>
     <canvas id='canvas2' height={400} width={400} style={{border:'2px solid green'}}></canvas>
    
    </div>
    </div>
  )
}
