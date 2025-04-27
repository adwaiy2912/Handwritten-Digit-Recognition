import React from "react";

import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/footer/Footer";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
   return (
      <>
         <Header />
         <Main />
         <Footer />
         <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </>
   );
}

export default App;
