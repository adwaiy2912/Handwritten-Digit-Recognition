from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from io import BytesIO
import imghdr

from src.model_loader import load_all_models
from src.predictor import make_predictions
from utils.process_image import process_image

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

model_names = ['KNN_model', 'NB_model', 'XGB_model', 'SVC_model', 'RF_model', 'VC_model']
models = load_all_models(model_names)

print("Models loaded successfully!")
print("Available models:")
for model_name in models.keys():
    print(f"- {model_name}")



@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/predict/")
async def create_upload_file(file: UploadFile = File(...)):
    # Check MIME type to ensure the file is an image
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Uploaded file is not an image")

    # Read the file content
    data = await file.read()

    # Additional check to verify it's a valid image file
    image_format = imghdr.what(None, h=data)
    if image_format not in ['jpeg', 'jpg', 'png']:
        raise HTTPException(status_code=400, detail="Unsupported image format")

    # Use BytesIO to process the image in memory without saving it to disk
    image_file = BytesIO(data)

    # Process the image (convert to grayscale, resize, and flatten)
    image_array = process_image(image_file)

    # Log the shape of the processed image
    print(f"Processed image shape: {image_array.shape}")
    

    # Predict the class using the predict function
    predictions = make_predictions(image_array, models)

    return predictions