def predict_model(model, data):
    return model.predict(data)

def predict_proba_model(model, data):
    if hasattr(model, "predict_proba"):
        return model.predict_proba(data)
    else:
        raise AttributeError(f"{model.__class__.__name__} does not support predict_proba.")
