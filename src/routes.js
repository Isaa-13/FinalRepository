import { 
    AboutUsPage,
    HomePage } from "./containers";
import CartPage from "./containers/cartPage/cartPage";
import Acercade from "./containers/Acercade/Acercade";

export const routes = [
    {
    path: "/",
    element: <HomePage />
    },
    {
        path: "/about",
        element: <AboutUsPage />
    },

    {
        path: "/cart",
        element: <CartPage />
    },
    {
        path:"/Acercade",
        element: <Acercade />
    }
]