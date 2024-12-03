
import { products } from "../../utils/Products";
import css from "./cartPage.modules.css";
const CartPage = () => {

    const cart = JSON.parse(localStorage.getItem("cart-Apolo"))||[];
    console.log ("cart", cart);
    return (
        <div className = {css.CartPage} >
            <h1> CartPage </h1>

            <div className= {css.CartPage_list}>

           {cart.length > 0 ? cart.map((item, index)  => {
                const product = products.find(product => product.id === item.id)


                if (product) {
                    return (
                        <div key={index} className={css.CartPage_item}>
                            <div className={css.CartPage_item_body}>
                                <img src={product.image} alt="Product" />
                            </div>
                            <div className={css.CartPage_item_body} >
                                <h2> {product.name}</h2>
                                <p> {product.description}</p>
                                <p> {product.price}</p>
                                <p> Cantidad: {item.quantity} </p>
                            </div>
                            <div className={css.CartPage_item_total}>
                                <p>Total: {product.price * item.quantity} </p>
                            </div>
                        </div>
                    )
                }
            }) : <p> Carrito vacío </p>}
            
        </div>

        <div className={css.CartPage_total}>
            <p> Total : </p>
            {cart.length > 0 ? cart.reduce((acc, item) => {

                const product = products.find(product => product.id === item.id)

                console.log("acc", acc);
                console.log("item", item);
                if (product) {
                    return acc + (product.price * item.quantity);
                } else {
                    return acc;
                }
            }, 0) : 0}

        </div>
    </div>
    )
}

export default CartPage; 