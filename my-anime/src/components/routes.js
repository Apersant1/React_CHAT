import {LOGIN_ROUTE,CHAT_ROUTE} from '../utils/consts'
import Login from "./Login";
import Chat from './Chat'

// Пути для не авторизированных пользователей
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    }
]
// Пути для  авторизированных пользователей
export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat,
    }
]