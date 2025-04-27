import pickle
import warnings
from pathlib import Path

MODEL_DIR = Path('models')

def load_model(model_name):
    model_path = MODEL_DIR / f"{model_name}.pkl"
    
    if not model_path.exists():
        print(f"⚠️ Model file '{model_path}' not found.")
        return None

    try:
        with open(model_path, 'rb') as f:
            with warnings.catch_warnings():
                warnings.filterwarnings("ignore", category=UserWarning)
                model = pickle.load(f)
        print(f"✅ Loaded model: {model_name}")
        return model
    except ModuleNotFoundError as e:
        print(f"❌ Module not found while loading {model_name}: {e}")
    except Exception as e:
        print(f"❌ Unexpected error loading {model_name}: {e}")
    
    return None

def load_all_models(model_names):
    """Load multiple models given a list of model names and return them in a dictionary."""
    models = {}
    for model_name in model_names:
        model = load_model(model_name)
        if model:
            models[model_name] = model
    return models
