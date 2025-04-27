import pickle
import os

def save_model(model, model_name):
    if not os.path.exists('models'):
        os.makedirs('models')

    model_path = os.path.join('models', f"{model_name}.pkl")
    
    with open(model_path, 'wb') as f:
        pickle.dump(model, f)
