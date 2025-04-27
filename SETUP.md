# ⚙️ Project Setup Guide

This guide will help you set up the **Number Recognition** project on your local machine.

---

## 🐍 Backend (FastAPI) Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/adwaiy2912/Number-Recognition.git
   cd Number-Recognition/FastAPI
   ```

2. **Create a virtual environment**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. **Install Python dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Download Models**

   -  📥 Download `models.zip` manually from [Dropbox Link](https://www.dropbox.com/scl/fi/lxpmqmu65b9nmxtjjeukt/models.zip?rlkey=mxuyoquhrphk5ugwm9jbha48d&st=8ejq30ci&dl=0).
   -  Extract it inside the `FastAPI/` directory so that a `models/` folder appears.

   **OR** you can generate the `.pkl` model files yourself:

   -  Navigate to the `FastAPI/utils/` folder and run `Number_Recognition.ipynb` to generate your own model files.

5. **Run the FastAPI server**
   ```bash
   uvicorn main:app --reload
   ```
   -  By default, the backend will be accessible at `http://127.0.0.1:8000`.

---

## ⚛️ Frontend (React) Setup

1. **Navigate to the frontend directory**

   ```bash
   cd ../React
   ```

2. **Install Node.js dependencies**

   ```bash
   npm install
   ```

3. **Run the React development server**
   ```bash
   npm run dev
   ```
   -  By default, the frontend will be accessible at `http://localhost:5173`.

---

## 🌐 Important Notes

-  Ensure the backend server is running **before** using the React frontend to make predictions.
-  The frontend expects the backend API to be available at `http://127.0.0.1:8000`.
-  If you change backend ports, update API calls inside the frontend code accordingly.
-  Use modern browsers like Chrome, Edge, or Firefox for best compatibility.

---

Happy Coding! 🚀
