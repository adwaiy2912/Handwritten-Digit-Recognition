import "./Container.css";
import React from "react";
import CanvasProvider from "../canvas/CanvasContext";
import Canvas from "../canvas/Canvas";
import ClearCanvasButton from "../canvas/ClearCanvasButton";
import UploadImage from "../upload/UploadImage";

const width = "400px";
const height = "400px";

const Container = ({
   selectedFile,
   setSelectedFile,
   canvasData,
   setCanvasData,
}) => {
   // Handle file upload changes
   const handleFileChange = (files) => {
      if (files && files.length > 0) {
         setSelectedFile(files[0]); // Set the file to the parent state
      } else {
         setSelectedFile(null);
      }
   };

   // Handle canvas data after drawing
   const handleCanvasDrawing = (dataURL) => {
      setCanvasData(dataURL); // Pass canvas data to parent for backend prediction
   };

   return (
      <div className="upload-canvas-container">
         <UploadImage
            onFilesSelected={handleFileChange}
            width={width}
            height={height}
         />
         <div
            className="canvas-container"
            style={{ width: width, height: height }}
         >
            <CanvasProvider width="350" height="350">
               <div className="canvas-wrapper">
                  <Canvas onDraw={handleCanvasDrawing} />
               </div>
               <div className="button-wrapper">
                  <ClearCanvasButton />
               </div>
            </CanvasProvider>
         </div>
      </div>
   );
};

export default Container;
