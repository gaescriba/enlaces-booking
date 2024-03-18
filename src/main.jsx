import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

//views import
import Error from './views/error.jsx'
import Landing from './views/landing.jsx'

//router import
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

//router initalization
const router = createBrowserRouter([
  {
    //pages mapping
    path: "/",
    element: <Landing/>,
    errorElement: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
