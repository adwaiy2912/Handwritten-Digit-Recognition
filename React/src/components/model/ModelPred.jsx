import "./Model.css";
import React, { useState, useEffect } from "react";
import ModelCard from "./ModelCard";
import defaultModelData from "./defaultModelData.js";

const ModelPred = ({ predictionResult }) => {
   const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 768);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   // Determine which data to use - if predictionResult exists, use it, otherwise use default data
   const dataToUse = predictionResult || defaultModelData;

   // Get model names - filter out any non-object properties
   const modelNames = Object.keys(dataToUse).filter(
      (key) => typeof dataToUse[key] === "object" && dataToUse[key] !== null
   );

   return (
      <div className="model-container">
         <h2 className="model-title">Model Predictions</h2>
         <div className="model-grid">
            {modelNames.map((modelName) => {
               const modelData = dataToUse[modelName];
               return (
                  <ModelCard
                     key={modelName}
                     name={modelName}
                     prediction={modelData.prediction}
                     probabilities={modelData.probabilities}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default ModelPred;
