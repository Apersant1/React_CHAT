import React , {useContext}from "react";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Context} from './index'
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from "./components/Loader/Loader";


const App = () => {

  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if(loading){
    return <Loader/>
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
