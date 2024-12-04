
import { Link } from "react-router-dom";
import { products } from "../../utils/Products";
import css from "./cartPage.modules.css";
const CartPage = () => {

    const cart = JSON.parse(localStorage.getItem("cart-Apolo"))||[];
    console.log ("cart", cart);
    return (


        <div className = {css.CartPage} >
                  <nav> 
            <ul> 
            <li> <Link to="/about" > inicio</Link> </li>
            <li> <Link to="/Cart" > Carrito</Link></li>
            </ul>

        </nav>

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


        <footer>
    <div class="Footer_section"> 
        <div class="Footer_text"> 
            <h2> Sobre nosotros</h2>
            <a href=""> Quiénes somos </a>
            <a href=""> Nuestras tiendas </a>
            <a href=""> Alianzas y colaboraciones </a>
            <a href=""> Trabaja con nosotros </a>
        </div>
        <div class="Footer_text"> 
            <h2> Información de envío</h2>
            <a href=""> Cómo utilizamos tus datos </a>
            <a href=""> Tu información está protegida </a>
            <a href=""> Nuestro centro de envío </a>
            <a href=""> Políticas de devolución </a>
        </div>
        <div class="Footer_text"> 
            <h2> Métodos de pago</h2>
            <a href=""> Tarjetas de débito </a>
            <a href=""> Puntos Apolo </a>
            <a href=""> Transferencias </a>
            <a href=""> Dépositos en tiendas </a>
        </div>
    </div>
    </footer>
    </div>
    )
}

export default CartPage; 