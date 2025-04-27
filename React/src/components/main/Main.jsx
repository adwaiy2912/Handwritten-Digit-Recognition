import React, { useState } from "react";
import Intro from "./Intro";
import Container from "../container/Container";
import Predict from "../predict/Predict";
import ModelPred from "../model/ModelPred";

const Main = () => {
   const [selectedFile, setSelectedFile] = useState(null); // For file upload
   const [canvasData, setCanvasData] = useState(null); // For canvas drawing
   const [isFilePrediction, setIsFilePrediction] = useState(false); // Toggle between file or canvas prediction
   const [predictionResult, setPredictionResult] = useState(null); // Store prediction results

   const handleFilePrediction = () => {
      setIsFilePrediction(true);
   };

   const handleCanvasPrediction = () => {
      setIsFilePrediction(false);
   };

   const handleClearCanvas = () => {
      setCanvasData(null);
   };

   return (
      <>
         <Intro />
         <Container
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            canvasData={canvasData}
            setCanvasData={setCanvasData}
         />
         <Predict
            onFilePrediction={handleFilePrediction}
            onCanvasPrediction={handleCanvasPrediction}
            selectedFile={selectedFile}
            canvasData={canvasData}
            setPredictionResult={setPredictionResult}
         />
         <ModelPred predictionResult={predictionResult} />
      </>
   );
};

export default Main;
