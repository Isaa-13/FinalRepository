import { Link, NavLink } from "react-router-dom";
import { ProductCard } from "../../components";
import { products } from "../../utils/Products";
import css from "./AboutUsPage.module.css";

const AboutUsPage = () => {
    return (
       <body>
        <nav> 
            <ul> 
                <li> <Link to="/about" > inicio</Link> </li>
                <li> <Link to="/Cart" > Carrito</Link></li>
            </ul>

        </nav>
         <div> 
            <div className={css.FirstPage}>
                <h1 className={css.AudioText}>¡Encuentra los mejores equipos de audio! </h1>
            </div>
            <h2>Los productos más <u>vendidos</u> </h2>
            <div className={css.Productlist} >
            {products.map(( product ) => {
                return <ProductCard key={product.id} product={product} className={css.Prodcutlist_card} />
            })}
            </div>
        </div>
        <section>
            <h1 class="PromTitle"> Promociones</h1>
        <div class="Prom_1 Promotion_card">
            <div class="Prom_img">
                
            </div>
            <div class="Prom_desc">
                <h4 class="Promcard_name"> Samsung Galaxy Buds 3 Pro</h4>
                <p class="Promcard_desc"> Noise cancelling avanzado y la calidad de sonido a otro nivel. Adaptables a tu entorno.</p>
                <p class="ProductCard_desc"> 2753 MXN </p>
                <button class="ProductCard_button"> ver más </button>
            </div>
        </div>
                <div class="Prom_1 Promotion_card">
            <div class="Prom_img">
                
            </div>
            <div class="Prom_desc">
                <h4 class="Promcard_name"> Samsung Galaxy Buds 3 Pro</h4>
                <p class="Promcard_desc"> Noise cancelling avanzado y la calidad de sonido a otro nivel. Adaptables a tu entorno.</p>
                <p class="ProductCard_desc"> 2753 MXN </p>
                <button class="ProductCard_button"> ver más </button>
            </div>
            
        </div>
    </section>

    <section class="categories">
    <div class="Bg_categories1" href="">
        <a class="Title_categories" href=""> <p> Equipo para producción</p> </a>
    </div>
    <div class="Bg_categories2" href="">
        <a class="Title_categories" href=""><p>Audífonos</p>  </a>
    </div>
    <div class="Bg_categories3" href="">
        <a class="Title_categories" href=""> <p>Bocinas </p></a>
    </div>
    <div class="Bg_categories4" >
        <a class="Title_categories" href="Index.html"> <p>Instrumentos musicales </p></a>
    </div>
        
    </section>





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
        </body>
        
    ) ;
}

export default AboutUsPage;