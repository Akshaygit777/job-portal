import path from 'path';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import './App.css';
import Navbar from './components/shared/Navbar';
import  Home  from './components/Home';
import { Component } from 'lucide-react';
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
  }

])

function App() {
  return ( <div>

<RouterProvider router = {appRouter}/>
  </div>
  
   
  )
}

export default App;
