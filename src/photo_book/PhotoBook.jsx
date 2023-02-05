import React,{useEffect} from 'react'
import { fabric } from 'fabric';
export default function PhotoBook() {

    const canvas = new fabric.Canvas("canvas", {
        width: 500,
        height: 500 });

        var style = {
            display: "inline-block",
  border: "3px solid #7afa02",
  height: "100px",
  width:" 100px",
  margin :"2px"
        }
        console.log(style,"style");
      
      // const file = $("file");
      
      
      let movingImage;
      
      let imgDragOffset = {
        offsetX: 0,
        offsetY: 0 };
      
      function setLayoutStyle1() {
        canvas.clear();
        canvas.backgroundColor = "pink";
        let clipPathTopRight = new fabric.Rect({
          width: 240,
          height: 240,
          left: 255,
          top: 5,
          stroke: "green",
          strokeWidth: 3,
          strokeDashArray: [5, 5],
          fill: "rgba(255,255,255,0.2)",
          selectable: false,
          isClipFrame: true });
      
      
        let clipPathTopLeft = new fabric.Rect({
          width: 240,
          height: 240,
          left: 5,
          top: 5,
          stroke: "red",
          strokeWidth: 1,
          strokeDashArray: [5, 5],
          fill: "rgba(255,255,255,0.2)",
          selectable: false,
          isClipFrame: true });
      
      
        let clipPathBotton = new fabric.Rect({
          width: 490,
          height: 240,
          left: 5,
          top: 255,
          stroke: "red",
          strokeWidth: 1,
          strokeDashArray: [5, 5],
          fill: "rgba(255,255,255,0.2)",
          selectable: false,
          isClipFrame: true });
      
      
        canvas.add(clipPathTopRight);
        canvas.add(clipPathTopLeft);
        canvas.add(clipPathBotton);
      }
      
      function setLayoutStyle2() {
        canvas.clear();
        let clipPathButton = new fabric.Circle({
          radius: 200,
          left: 50,
          top: 50,
          stroke: "red",
          strokeWidth: 1,
          strokeDashArray: [5, 5],
          fill: "transparent",
          selectable: false,
          isClipFrame: true });
      
        canvas.add(clipPathButton);
      }
      
      function setLayoutStyle3() {
        canvas.clear();
        const URL =
        "https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg";
        // "https://freesvg.org/storage/img/thumb/1674834536gravure-full-metal-alchimist-chibi-ed-surprise-3.png";
      
        fabric.loadSVGFromURL(URL, (objects, options) => {
          console.log(options);
          let svgClip = fabric.util.groupSVGElements(objects, options);
          svgClip.scaleToWidth(300);
          svgClip.set({
            left: 100,
            top: 100,
            stroke: "green",
            strokeWidth: 2,
            strokeDashArray: [10, 10],
            fill: "transparent",
            selectable: false,
            isClipFrame: true });
      
          canvas.add(
          new fabric.Rect({
            width: 750,
            height: 750,
            angle: -45,
            left: -50,
            top: 50,
            fill: "#F596AA",
            selectable: false }));
      
      
          canvas.add(
          new fabric.Rect({
            width: 750,
            height: 750,
            angle: 45,
            fill: "#F596AA",
            selectable: false }));
      
      
          canvas.add(svgClip).renderAll();
        });
      }
      
      const set_layout4 = () => {
        canvas.clear();

          // var canvas = new fabric.Canvas('canvas');
            // set a background image
          // fabric.Image.fromURL('https://images.unsplash.com/photo-1675084364777-db6bae9091d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', function(img) {
          //     canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
          //       scaleX: canvas.width / img.width,
          //       scaleY: canvas.height / img.height
          //     });  
          //   });
  
  
          // create a path
             var path = new fabric.Path('M85.6,606.2c-13.2,54.5-3.9,95.7,23.3,130.7c27.2,35-3.1,55.2-25.7,66.1C60.7,814,52.2,821,50.6,836.5c-1.6,15.6,19.5,76.3,29.6,86.4c10.1,10.1,32.7,31.9,47.5,54.5c14.8,22.6,34.2,7.8,34.2,7.8c14,10.9,28,0,28,0c24.9,11.7,39.7-4.7,39.7-4.7c12.4-14.8-14-30.3-14-30.3c-16.3-28.8-28.8-5.4-33.5-11.7s-8.6-7-33.5-35.8c-24.9-28.8,39.7-19.5,62.2-24.9c22.6-5.4,65.4-34.2,65.4-34.2c0,34.2,11.7,28.8,28.8,46.7c17.1,17.9,24.9,29.6,47.5,38.9c22.6,9.3,33.5,7.8,53.7,21c20.2,13.2,62.2,10.9,62.2,10.9c18.7,6.2,36.6,0,36.6,0c45.1,0,26.5-15.6,10.1-36.6c-16.3-21-49-3.1-63.8-13.2c-14.8-10.1-51.4-25.7-70-36.6c-18.7-10.9,0-30.3,0-48.2c0-17.9,14-31.9,14-31.9h72.4c0,0,56-3.9,70.8,26.5c14.8,30.3,37.3,36.6,38.1,52.9c0.8,16.3-13.2,17.9-13.2,17.9c-31.1-8.6-31.9,41.2-31.9,41.2c38.1,50.6,112-21,112-21c85.6-7.8,79.4-133.8,79.4-133.8c17.1-12.4,44.4-45.1,62.2-74.7c17.9-29.6,68.5-52.1,113.6-30.3c45.1,21.8,52.9-14.8,52.9-14.8c15.6,2.3,20.2-17.9,20.2-17.9c20.2-22.6-15.6-28-16.3-84c-0.8-56-47.5-66.1-45.1-82.5c2.3-16.3,49.8-68.5,38.1-63.8c-10.2,4.1-53,25.3-63.7,30.7c-0.4-1.4-1.1-3.4-2.5-6.6c-6.2-14-74.7,30.3-74.7,30.3s-108.5,64.2-129.6,68.9c-21,4.7-18.7-9.3-44.3-7c-25.7,2.3-38.5,4.7-154.1-44.4c-115.6-49-326,29.8-326,29.8s-168.1-267.9-28-383.4C265.8,13,78.4-83.3,32.9,168.8C-12.6,420.9,98.9,551.7,85.6,606.2z');
  
            // hexagonal
        // var path = new fabric.Path('M269 0l190.212 78.788L538 269l-78.788 190.212L269 538 78.788 459.212 0 269 78.788 78.788z')
        
            // star
        // var path = new fabric.Path('M276.5 444.707l-170.752 80.812 24.093-187.367L.218 200.731l185.642-34.987L276.5 0l90.64 165.744 185.642 34.987-129.623 137.421 24.093 187.367z')
  
        
            // Extra star
        // var path = new fabric.Path('M381.5 585.822L279.396 762.558l-.057-204.11-176.793 102.006L204.552 483.66l-204.11-.057L177.178 381.5.442 279.396l204.11-.057-102.006-176.793L279.34 204.552l.057-204.11L381.5 177.178 483.604.442l.057 204.11 176.793-102.006L558.448 279.34l204.11.057L585.822 381.5l176.736 102.104-204.11.057 102.006 176.793L483.66 558.448l-.057 204.11z')
  
            // leaf 
        //var path = new fabric.Path('M31.604 4.203c-3.461-2.623-8.787-4.189-14.247-4.189-6.754 0-12.257 2.358-15.099 6.469-1.335 1.931-2.073 4.217-2.194 6.796-0.108 2.296 0.278 4.835 1.146 7.567 2.965-8.887 11.244-15.847 20.79-15.847 0 0-8.932 2.351-14.548 9.631-0.003 0.004-0.078 0.097-0.207 0.272-1.128 1.509-2.111 3.224-2.846 5.166-1.246 2.963-2.4 7.030-2.4 11.931h4c0 0-0.607-3.819 0.449-8.212 1.747 0.236 3.308 0.353 4.714 0.353 3.677 0 6.293-0.796 8.231-2.504 1.736-1.531 2.694-3.587 3.707-5.764 1.548-3.325 3.302-7.094 8.395-10.005 0.292-0.167 0.48-0.468 0.502-0.804s-0.126-0.659-0.394-0.862z')
        //     // chat-message 
        // var path = new fabric.Path('M15 0v0c8.284 0 15 5.435 15 12.139s-6.716 12.139-15 12.139c-0.796 0-1.576-0.051-2.339-0.147-3.222 3.209-6.943 3.785-10.661 3.869v-0.785c2.008-0.98 3.625-2.765 3.625-4.804 0-0.285-0.022-0.564-0.063-0.837-3.392-2.225-5.562-5.625-5.562-9.434 0-6.704 6.716-12.139 15-12.139zM31.125 27.209c0 1.748 1.135 3.278 2.875 4.118v0.673c-3.223-0.072-6.181-0.566-8.973-3.316-0.661 0.083-1.337 0.126-2.027 0.126-2.983 0-5.732-0.805-7.925-2.157 4.521-0.016 8.789-1.464 12.026-4.084 1.631-1.32 2.919-2.87 3.825-4.605 0.961-1.84 1.449-3.799 1.449-5.825 0-0.326-0.014-0.651-0.039-0.974 2.268 1.873 3.664 4.426 3.664 7.24 0 3.265-1.88 6.179-4.82 8.086-0.036 0.234-0.055 0.474-0.055 0.718z')
  
        //     // home 
        // var path = new fabric.Path('M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z')
  
  
  
      // rose img path
      //   var path = new fabric.Path('M 50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0 m -30,-30 q 20,-20 40,0 q 20,20 0,40 q -20,20 -40,0 q -20,-20 0,-40 z')
      //   var path = new fabric.Path('M 10 3 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 10')
  
          path.set({  
            // fill: 'yellow',
        //   stroke: 'green',  
          top: 0,
            left: 0,
            // fixed: true,
            // fill: 'blue',
            // stroke: '',
            scaleX: 0.2,
            scaleY: 0.2
          //   scaleX: 0.8,
          //   scaleY: 0.8
          });
  
          // path2.set({
          
          // top: 0,
          //   left: 0,
           
          //   scaleX: 0.8,
          //   scaleY: 0.8
          // });
  
          
  
          // create a mask image
          fabric.Image.fromURL(movingImage, function(img) {
          //    img.clipPath = path2;
          // fabric.Image.fromURL('https://images.unsplash.com/photo-1675025893356-5853331b0759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', function(img) {
          // //    img.clipPath = path2;
          img.clipPath = path;
            canvas.add(img);
          });
      
      }
      
      function saveImg(e) {
        if (e.target.tagName.toLowerCase() === "img") {
          imgDragOffset.offsetX = e.clientX - e.target.offsetLeft;
          imgDragOffset.offsetY = e.clientY - e.target.offsetTop;
          movingImage = e.target;
          console.log("movingImage from saveImg", e.target)
        }
      }
      
      // function handleFile() {
      //   const fileReader = new FileReader();
      //   fileReader.readAsDataURL(this.files[0]);
      //   fileReader.onload = e => {
      //     // base64
      //     const dataURL = e.target.result;
      //     const img = document.createElement("img");
      //     img.draggable = true;
      //     img.src = dataURL;
      //     img.click = saveImg;
      //   };
      // }
      let clipPath; 
      function dropImg(e) {
        let target = e.target;
        console.log(target,"from DROPimg");
        if (!target?.isClipFrame) return;
        //
        target.clone(cloned => clipPath = cloned);
        clipPath.absolutePositioned = true;
        // let clipPath = new fabric.Rect({ width: target.width, height: target.height, top: target.top, left: target.left, absolutePositioned: true })
        const image = new fabric.Image(movingImage, {
          width: movingImage?.naturalWidth,
          height: movingImage?.naturalHeight,
          left: target.left,
          top: target.top,
          clipPath });
      
        //  X Y
        image.scaleToWidth(target.getScaledWidth());
        const isFullHeight = image.getScaledHeight() < target.height;
        if (isFullHeight) image.scaleToHeight(target.getScaledHeight());
        image.lockMovementY = isFullHeight;
        image.lockMovementX = !isFullHeight;
      
        image.clipPath = clipPath;
        canvas.add(image);
      }
      
      
      
      
      
      canvas.on("drop", dropImg);
   
      
      
      const layout01Btn = () => {
          setLayoutStyle1();
      
      }
      const layout02Btn = () => {
          setLayoutStyle2();
      
      }
      const layout03Btn = () => {
        setLayoutStyle3();
      
      }

      const layout04Btn = () => {
        set_layout4()
      }
      
    
      

  return (
    <>

<div className="container">
    <div className="row">
        <div className="col-sm-8 offset-2 mt-5">

                

    <div className="options">

      <button className="btn btn-dark ms-0"    >upload</button>
      <button className="btn btn-dark ms-5"   onClick={layout01Btn} >layout 01</button>
      <button className="btn btn-dark ms-5"   onClick={layout02Btn} >lauyout 02</button>
      <button className="btn btn-dark ms-5"   onClick={layout03Btn} >loadSVGFromURL</button>
      <button className="btn btn-dark ms-5"   onClick={layout04Btn} >svgPathImg</button>
      
        {/* <input type="file" id="file" onchange={handleFile}/> */}
      </div>  
      drag & drop it!
      <div id="imgset" onMouseDown={saveImg}>
        <img  style={style} src="https://images.unsplash.com/photo-1610085927744-7217728267a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGZyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" draggable />
        <img  style={style} src="https://images.unsplash.com/photo-1675129443951-aaa0c89f6886?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" draggable />
        <img  style={style} src="https://images.unsplash.com/photo-1675168156941-8d2a7f282d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" draggable />
      </div>
      <canvas id="canvas" style={{border:"2px solid green"}}></canvas>
      
        </div>
    </div>
   </div>
  
        
    </>
  )
}
