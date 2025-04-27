import "./Upload.css";
import React, { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const UploadImage = ({ onFilesSelected, width, height }) => {
   const [image, setImage] = useState(null);
   const [imagePreview, setImagePreview] = useState(null);

   const handleFileChange = (event) => {
      const selectedFiles = event.target.files;
      if (selectedFiles && selectedFiles.length > 0) {
         const selectedImage = selectedFiles[0];
         setImage(selectedImage);
         generateImagePreview(selectedImage);
      }
   };

   const handleDrop = (event) => {
      event.preventDefault();
      const droppedFiles = event.dataTransfer.files;
      if (droppedFiles.length > 0) {
         const droppedImage = droppedFiles[0];
         setImage(droppedImage);
         generateImagePreview(droppedImage);
      }
   };

   const handleRemoveImage = () => {
      setImage(null);
      setImagePreview(null);
   };

   const generateImagePreview = (imageFile) => {
      const reader = new FileReader();
      reader.onload = (e) => {
         setImagePreview(e.target.result);
      };
      reader.readAsDataURL(imageFile);
   };

   useEffect(() => {
      onFilesSelected(image ? [image] : []);
   }, [image, onFilesSelected]);

   return (
      <div
         className={`document-uploader ${
            image ? "upload-box active" : "upload-box"
         }`}
         onDrop={handleDrop}
         onDragOver={(event) => event.preventDefault()}
         style={{ width: width, height: height }}
      >
         {!image && (
            <>
               <div className="upload-info">
                  <AiOutlineCloudUpload
                     style={{ color: "black", fontSize: "40px" }}
                  />
                  <div style={{ textAlign: "center" }}>
                     <p>
                        <b>Drag and drop your image here</b>
                     </p>
                     <p>Supported files: .PNG, .JPG, .JPEG</p>
                  </div>
               </div>
               <input
                  type="file"
                  hidden
                  id="browse"
                  onChange={handleFileChange}
                  accept=".png,.jpg,.jpeg"
               />
               <h5>OR</h5>
               <label htmlFor="browse" className="browse-btn">
                  Browse image
               </label>
            </>
         )}

         {image && (
            <div className="file-preview">
               {imagePreview ? (
                  <img
                     src={imagePreview}
                     alt="Preview"
                     style={{
                        width: width,
                        height: height,
                        borderRadius: "10px",
                        overflow: "hidden",
                     }}
                     onClick={handleRemoveImage}
                  />
               ) : (
                  <p>Loading preview...</p>
               )}
            </div>
         )}
      </div>
   );
};

export default UploadImage;
