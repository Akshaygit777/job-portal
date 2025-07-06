import path from 'path';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import './App.css';
import Navbar from './components/shared/Navbar';
import  Home  from './components/Home';
import { Component } from 'lucide-react';
import Jobs from './components/Jobs';
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
  path:'/signup',
  element:<Signup/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  }

])

function App() {
  return ( <div>

<RouterProvider router = {appRouter}/>
  </div>
  
   
  )
}

export default App;
