# 🧮 Handwritten Digit Recognition

A full-stack project where users can draw or upload handwritten digits and get instant model predictions.  
It combines a **React** frontend for smooth user interaction and a **FastAPI** backend serving multiple trained machine learning models.

---

## 📑 Table of Contents

-  [🧮 Handwritten Digit Recognition](#-handwritten-digit-recognition)
   -  [📑 Table of Contents](#-table-of-contents)
   -  [✨ Features](#-features)
   -  [📂 Project Structure](#-project-structure)
      -  [🐍 FastAPI (Backend)](#-fastapi-backend)
      -  [⚛️ React (Frontend)](#️-react-frontend)
   -  [🧠 Machine Learning Models](#-machine-learning-models)
   -  [🛠️ Tech Stack](#️-tech-stack)
   -  [⚙️ Setup](#️-setup)
   -  [📸 Preview](#-preview)
   -  [📌 Additional Notes](#-additional-notes)

---

## ✨ Features

-  🎨 **Canvas Drawing**: Draw numbers directly and get predictions.
-  🖼️ **Image Upload**: Upload images for recognition.
-  📈 **Multiple Models**: Choose between KNN, SVC, Random Forest, XGBoost, Voting Classifier, and Naive Bayes.
-  🚀 **Real-time Predictions**: Fast API response for a seamless experience.
-  🔥 **Interactive UI**: Modern, clean React-based interface.

---

## 📂 Project Structure

```
Handwritten-Digit-Recognition/
├── FastAPI/
│ ├── models/
│ ├── src/
│ ├── utils/
│ ├── main.py
│ └── requirements.txt
|
└── React/
    ├── public/
    ├── src/
    │ ├── assets/
    │ ├── components/
    │ ├── App.jsx
    │ ├── index.css
    │ └── main.jsx
    ├── package.json
    └── vite.config.js
```

### 🐍 FastAPI (Backend)

-  `models/`  
   Pre-trained ML models stored as `.pkl` files (e.g., KNN, SVC, Random Forest, XGBoost).  
   Download `models.zip` manually from [Dropbox Link](https://www.dropbox.com/scl/fi/lxpmqmu65b9nmxtjjeukt/models.zip?rlkey=mxuyoquhrphk5ugwm9jbha48d&st=8ejq30ci&dl=0).

-  `src/`

   -  `model_loader.py`: Handles model loading.
   -  `model_predict.py`: Core logic for making predictions.
   -  `model_saver.py`: Utilities for saving models.
   -  `predictor.py`: Central prediction orchestration.

-  `utils/`

   -  `Number_Recognition.ipynb`: Development notebook.
   -  `process_image.py`: Image preprocessing helpers.
   -  `number_recognition_old.py`: Older/backup script.

-  `main.py`

   -  Main FastAPI app with prediction endpoints.

-  `requirements.txt`
   -  Backend Python dependencies.

---

### ⚛️ React (Frontend)

-  `public/`
   Static assets like videos and images (e.g., `Demo.mp4`, `vite.svg`).

-  `src/`

   -  `assets/`: App-specific static images (e.g., `react.svg`).
   -  `components/`
      -  `canvas/`: Drawing canvas components (Canvas, CanvasContext, Clear button).
      -  `container/`: Main layout wrapper (Container).
      -  `footer/`: Footer section.
      -  `header/`: Header section.
      -  `main/`: Introduction and main display area.
      -  `model/`: Model cards, prediction visualizers (like probability bars).
      -  `predict/`: Prediction page component.
      -  `upload/`: Upload functionality components.

-  `App.jsx`

   -  Main app wrapper that controls routes/views.

-  `main.jsx`

   -  App bootstrapping code.

-  `index.css`

   -  Global styles.

-  `vite.config.js`
   -  Vite project configuration.

---

## 🧠 Machine Learning Models

-  **KNN** (K-Nearest Neighbors)
-  **SVC** (Support Vector Classifier)
-  **Random Forest Classifier**
-  **XGBoost Classifier**
-  **Voting Classifier** (VC)
-  **Naive Bayes Classifier**

These models are trained on digit datasets and saved inside the **FastAPI/models** folder.

---

## 🛠️ Tech Stack

| Frontend     | Backend              | Machine Learning |
| :----------- | :------------------- | :--------------- |
| React (Vite) | FastAPI              | scikit-learn     |
| TailwindCSS  | Uvicorn (for server) | XGBoost          |
| Vite         |                      | joblib / pickle  |

---

## ⚙️ Setup

Want to run it locally?  
👉 Check out the [Setup Guide](./SETUP.md) for complete instructions.

---

## 📸 Preview

Here’s a quick demo of the application in action:

https://github.com/user-attachments/assets/24ca8422-0a95-4548-830f-549d9e0468b3

---

## 📌 Additional Notes

-  **Environment Isolation**: Recommended to use Python virtual environments for backend.
-  **Frontend Dev Server**: React app uses Vite's lightning-fast dev server.
-  **Deployment Ready**: Minor tweaks can make it production ready (Dockerization possible).
-  **API Communication**: Frontend sends **base64** encoded images to the FastAPI backend for prediction.

---
