import { 
    AboutUsPage,
    HomePage } from "./containers";
import CartPage from "./containers/cartPage/cartPage";

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
    }
]