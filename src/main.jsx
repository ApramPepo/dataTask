import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from "./components/header.jsx";
import Weather from "./components/weather.jsx";
import Footer from "./components/footer.jsx"
import About from "./components/about.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
            <Header />
            <Weather />
            <App />
            <Footer />
            </>
        ),
    },
    {
        path: "/about",
        element: (
            <>
                <Header />
                <About />
                <Footer />
            </>
        )
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}/>

  </StrictMode>,
)
