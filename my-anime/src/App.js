import React , {useContext}from "react";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Context} from './index'
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from "./components/Loader/Loader";


const App = () => {

  const {auth} = useContext(Context) // Получение данных пользователя из контекста
  const [user, loading] = useAuthState(auth)
  console.log(user)

  if(loading){             // Если компонент еще загружается отрисовать лоадер
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
