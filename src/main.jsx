import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Header from "./components/header.jsx";
import Weather from "./components/weather.jsx";
import Form from "./components/form.jsx";
// import List from "./components/list.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
      <Weather />
      <App />


  </StrictMode>,
)
