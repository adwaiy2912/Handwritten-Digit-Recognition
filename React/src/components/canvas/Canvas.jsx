import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";

const Canvas = ({ onDraw }) => {
   const {
      canvasRef,
      prepareCanvas,
      startDrawing,
      finishDrawing,
      draw,
      getCanvasData,
   } = useCanvas();

   useEffect(() => {
      prepareCanvas();
      return () => {
         // Cleanup if necessary when the component unmounts
      };
   }, []); // Only run once on mount

   // Add a useEffect to send canvas data when it changes
   useEffect(() => {
      const handleCanvasChange = () => {
         if (onDraw && canvasRef.current) {
            const dataURL = getCanvasData();
            onDraw(dataURL);
         }
      };

      // Set up event listeners for canvas changes
      const canvas = canvasRef.current;
      if (canvas) {
         canvas.addEventListener("mouseup", handleCanvasChange);
         return () => {
            canvas.removeEventListener("mouseup", handleCanvasChange);
         };
      }
   }, [onDraw, getCanvasData]);

   return (
      <canvas
         onMouseDown={startDrawing}
         onMouseUp={finishDrawing}
         onMouseMove={draw}
         ref={canvasRef}
      />
   );
};

export default Canvas;
