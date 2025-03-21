import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AboutMe />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} ></RouterProvider>
);