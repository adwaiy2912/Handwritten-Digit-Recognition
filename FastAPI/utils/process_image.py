from PIL import Image
import numpy as np

import matplotlib.pyplot as plt

def process_image(file_data):
    """Converts an uploaded image to grayscale, resizes it, and flattens it into a numpy array."""
    
    image = Image.open(file_data)
    image = image.convert("L")  # Convert to grayscale
    image = image.resize((28, 28))  # Resize to 28x28
    image_array = np.array(image).flatten()  # Flatten the image array

    return image_array
