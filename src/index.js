import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.Fragment>
  <ThirdwebProvider activeChain="polygon">
    

    <BrowserRouter>

    <ScrollToTop />
    
    <App />
    
    </BrowserRouter>
    </ThirdwebProvider>
    </React.Fragment>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
