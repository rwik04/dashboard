import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DetectionCount from './components/Detection_Alert';
import HomePage from './components/Home';
import ChartBar from './components/Chart.jsx'
import Table from './components/DataGrid.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage />,
  },
  {
    path:'/reports',
    element:<Table />,
  },
  {
    path:'/settings',
    element:<div></div>,
  },
  {
    path:'/help',
    element:<div></div>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
