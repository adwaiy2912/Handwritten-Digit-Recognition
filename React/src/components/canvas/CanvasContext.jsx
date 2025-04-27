import React, { useContext, useRef, useState, useEffect } from "react";

const CanvasContext = React.createContext();

const CanvasProvider = ({ children, width, height }) => {
   const [isDrawing, setIsDrawing] = useState(false);
   const canvasRef = useRef(null);
   const contextRef = useRef(null);

   const prepareCanvas = () => {
      const canvas = canvasRef.current;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.style.borderRadius = "10px";
      canvas.style.cursor = "crosshair";

      const context = canvas.getContext("2d");
      context.scale(1, 1);
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.lineCap = "round";
      context.strokeStyle = "white";
      context.lineWidth = 20;
      contextRef.current = context;
   };

   // Adjust canvas size when width or height changes
   useEffect(() => {
      prepareCanvas();
   }, [width, height]); // Re-run when the width or height prop changes

   const startDrawing = ({ nativeEvent }) => {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
   };

   const finishDrawing = () => {
      contextRef.current.closePath();
      setIsDrawing(false);
   };

   const draw = ({ nativeEvent }) => {
      if (!isDrawing) {
         return;
      }
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
   };

   const clearCanvas = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);
   };

   const getCanvasData = () => {
      return canvasRef.current.toDataURL("image/png"); // Get the canvas data as a base64 PNG image
   };

   return (
      <CanvasContext.Provider
         value={{
            canvasRef,
            contextRef,
            prepareCanvas,
            startDrawing,
            finishDrawing,
            clearCanvas,
            draw,
            getCanvasData, // Added function to get canvas data
         }}
      >
         {children}
      </CanvasContext.Provider>
   );
};

export default CanvasProvider;
export const useCanvas = () => useContext(CanvasContext);
