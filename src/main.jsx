
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import Wrapper from './Wrapper';
createRoot(document.getElementById('root')).render(
    <>
    <Wrapper>
        <ToastContainer
        position="top-center"
        autoClose={300}
        theme="colored" 
        />
    
        <App />
    </Wrapper>
   
    </>
    
   
)