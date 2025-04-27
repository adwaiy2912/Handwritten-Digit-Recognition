def make_predictions(image_array, models):
    """
    Predict the class and class probabilities for the given image array using all available models.
    
    Args:
        image_array (numpy array): The flattened image array to predict on.
        models (dict): Dictionary of loaded models with model names as keys.
    
    Returns:
        dict: A dictionary containing model names and their respective predictions and probabilities.
    """
    predictions = {}

    for model_name, model in models.items():
        # Predict the class
        predicted_class = model.predict([image_array])[0]
        predictions[model_name] = {
            'prediction': int(predicted_class)  # Ensure the prediction is an int
        }

        # Check if the model supports predict_proba
        if hasattr(model, 'predict_proba'):
            predicted_proba = model.predict_proba([image_array])[0]  # Get probabilities
            predictions[model_name]['probabilities'] = predicted_proba.tolist()  # Convert numpy array to list
        
        print(f"Model: {model_name}, Prediction: {predictions[model_name]['prediction']}")

    return predictions
