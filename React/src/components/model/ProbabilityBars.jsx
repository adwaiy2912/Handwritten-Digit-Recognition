import "./ProbBars.css";
import React from "react";

const ProbabilityBars = ({ probabilities }) => {
   // Ensure we have valid probabilities
   const validProbabilities = Array.isArray(probabilities) ? probabilities : [];

   return (
      <div className="probability-bar-container">
         {validProbabilities.map((prob, index) => {
            // Calculate a different color for each digit
            const hue = (index * 36) % 360; // Different hue for each number
            const barColor = `hsl(${hue}, 80%, 50%)`;
            const barWidth = `${Math.max(prob * 100, 0.5)}%`; // Min width for visibility

            return (
               <div key={index} className="probability-bar-item">
                  <div className="probability-bar-inner">
                     <span className="probability-bar-label">{index}:</span>
                     <div className="probability-bar">
                        <div
                           className="probability-bar-fill"
                           style={{
                              backgroundColor: barColor,
                              width: barWidth,
                           }}
                        ></div>
                     </div>
                     <span className="probability-bar-percentage">
                        {(prob * 100).toFixed(1)}%
                     </span>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default ProbabilityBars;
