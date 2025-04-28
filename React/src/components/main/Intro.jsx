import "./Intro.css";
import React from "react";

const Intro = () => {
   return (
      <section className="intro-section">
         <h1 className="intro-heading">
            Welcome to Handwritten Digit Recognition
         </h1>
         <p className="intro-text">
            This tool allows you to either upload an image of a handwritten
            digit or draw a number yourself to recognize it. Follow the steps
            below to get started.
         </p>

         <h2 className="how-to-use-heading">How to Use:</h2>
         <ol className="steps-list">
            <li className="step-item">
               <strong className="step-title">Upload a File:</strong> Click on
               the "Upload" button to upload an image of a number. The system
               will process the image and recognize the digit.
               <b> (After upload, click on image to remove)</b>
            </li>

            <li className="step-item">
               <strong className="step-title">Draw a Number:</strong> If you
               prefer, you can draw a number directly on the canvas. Once you’re
               done, click "Clear" to reset or let the system recognize your
               drawing.
            </li>
         </ol>

         <p className="intro-text">
            Once you've uploaded or drawn a number, the system will display the
            recognized digit below. If you're ready, go ahead and interact with
            the system!
         </p>
      </section>
   );
};

export default Intro;
