import "./ModelCard.css";
import React from "react";
import ProbabilityBars from "./ProbabilityBars";

const ModelCard = ({ name, prediction, probabilities }) => {
   // Handle different formats of prediction and probabilities

   // Ensure prediction is a number
   const predictionValue =
      typeof prediction === "number"
         ? prediction
         : parseInt(prediction, 10) || 0;

   // Ensure probabilities is an array of numbers
   const probabilityArray = Array.isArray(probabilities)
      ? probabilities
      : Array.isArray(probabilities?.map)
      ? probabilities.map((item) =>
           typeof item === "number" ? item : item.probability || 0
        )
      : [];

   // Find highest probability for highlight
   const maxProb = Math.max(...probabilityArray);
   const maxIndex = probabilityArray.indexOf(maxProb);
   const isCorrectPrediction = maxIndex === predictionValue;

   return (
      <div className="model-card">
         {/* Color accent on top */}
         <div className="model-card-accent"></div>
         <div className="model-card-header">
            <h3 className="model-card-title">{name}</h3>
            <div
               className={`model-card-prediction ${
                  isCorrectPrediction ? "correct" : "incorrect"
               }`}
            >
               {predictionValue}
            </div>
         </div>
         <ProbabilityBars probabilities={probabilityArray} />
      </div>
   );
};

export default ModelCard;
