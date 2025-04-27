import "./Predict.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

const Predict = ({
   onFilePrediction,
   onCanvasPrediction,
   selectedFile,
   canvasData,
   setPredictionResult,
}) => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const handleFilePrediction = () => {
      if (!selectedFile) {
         toast.warn("Please select a file first");
         return;
      }
      onFilePrediction();
      // Send file data to FastAPI backend
      sendPredictionToBackend("file", selectedFile);
   };

   const handleCanvasPrediction = () => {
      if (!canvasData) {
         toast.warn("Please draw something first");
         return;
      }
      onCanvasPrediction();
      // Send canvas data to FastAPI backend
      sendPredictionToBackend("canvas", canvasData);
   };

   const sendPredictionToBackend = async (type, data) => {
      setIsLoading(true);
      setError(null);

      try {
         let formData = new FormData();

         if (type === "file" && data) {
            formData.append("file", data);
         } else if (type === "canvas" && data) {
            // Convert canvas data URL to a blob
            const response = await fetch(data);
            const blob = await response.blob();
            formData.append("file", blob, "canvas.png");
         } else {
            throw new Error("No valid data to send");
         }

         // Send the formData to the backend
         const result = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            body: formData,
         });

         if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
         }

         const resultData = await result.json();
         console.log("Prediction Result:", resultData);
         // Pass the prediction results to the parent component
         setPredictionResult(resultData);
         toast.success("Prediction complete!");
      } catch (err) {
         console.error("Error:", err);
         setError(err.message);
         toast.error(`Error: ${err.message}`);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="predict-container">
         <button
            className="predict-button"
            onClick={handleFilePrediction}
            disabled={isLoading || !selectedFile}
         >
            {isLoading ? <FaSpinner className="spinner" /> : "Predict Image"}
         </button>
         <button
            className="predict-button"
            onClick={handleCanvasPrediction}
            disabled={isLoading || !canvasData}
         >
            {isLoading ? <FaSpinner className="spinner" /> : "Predict Canvas"}
         </button>
      </div>
   );
};

export default Predict;
