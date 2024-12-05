import { Link, NavLink } from "react-router-dom";
import { ProductCard } from "../../components";
import { products } from "../../utils/Products";
import css from "./AboutUsPage.module.css";
import huawei from "../../assets/Huawei_Freebuds_3_pro.jpg";
import samsung from "../../assets/Samsung_Galaxy_Buds_3_Pro.jpg";
import sony from "../../assets/Sony_WF-1000XM4.jpeg";
import apple from "../../assets/Airpods-pro-2.png";
const AboutUsPage = () => {
    return (
       <body>
        <nav> 
            <ul> 
                <li> <Link to="/about" > Inicio</Link> </li>
                <li> <Link to="/Cart" > Carrito</Link></li>
                <li> <Link to="/Acercade" > Acerca de</Link></li>
            </ul>

        </nav>
         <div> 
            <div className={css.FirstPage}>
                <h1 className={css.AudioText}>¡Encuentra los mejores equipos de audio! </h1>
            </div>
            <h2 className={css.Text_first}>Los productos más <u>vendidos</u> </h2>
            <div className={css.Productlist} >
            {products.map(( product ) => {
                return <ProductCard key={product.id} product={product} className={css.Prodcutlist_card} />
            })}
            </div>
        </div>
        <section className={css.Prom_section}>
            <h1 class={css.PromTitle}> Promociones</h1>

        <div class={css.Promotion_card}>
            <div class={css.Prom_img}>
                <img src={huawei}></img>
            </div>
            <div class={css.Prom_desc}>
                <h4 class={css.Promcard_name}> Samsung Galaxy Buds 3 Pro</h4>
                <p class={css.Promcard_desc}> Noise cancelling avanzado y la calidad de sonido a otro nivel. Adaptables a tu entorno.</p>
                <p class={css.ProductCard_desc}> 2753 MXN </p>
                <button class={css.ProductCard_button}> ver más </button>
            </div>
        </div>
                <div class={css.Promotion_card}>
            <div class={css.Prom_img}>
            <img src={samsung}></img>
            </div>
            <div class={css.Prom_desc}>
                <h4 class={css.Promcard_name}> Samsung Galaxy Buds 3 Pro</h4>
                <p class={css.Promcard_desc}> Noise cancelling avanzado y la calidad de sonido a otro nivel. Adaptables a tu entorno.</p>
                <p class={css.ProductCard_desc}> 2753 MXN </p>
                <button class={css.ProductCard_button}> ver más </button>
            </div>
            
        </div>
    </section>
    
    <section class={css.categories}>
    <div class={css.Bg_categories1} href="">
    <Link to="/about" className= {css.Title_categories}> <p>Equipo para producción </p> </Link>
    </div>
    <div class={css.Bg_categories2} href="">
    <Link to="/about" className= {css.Title_categories}> <p>Audífonos </p> </Link>
    </div>
    <div class={css.Bg_categories3} href="">
    <Link to="/about" className= {css.Title_categories}> <p>Bocinas </p> </Link>
    </div>
    <div class={css.Bg_categories4} >
    <Link to="/about" className= {css.Title_categories}> <p>Instrumentos musicales </p> </Link>
    </div>
        
    </section>





    <footer>
    <div class={css.Footer_section}> 
        <div class={css.Footer_text}> 
            <h2> Sobre nosotros</h2>
            <a href=""> Quiénes somos </a>
            <a href=""> Nuestras tiendas </a>
            <a href=""> Alianzas y colaboraciones </a>
            <a href=""> Trabaja con nosotros </a>
        </div>
        <div class={css.Footer_text}> 
            <h2> Información de envío</h2>
            <a href=""> Cómo utilizamos tus datos </a>
            <a href=""> Tu información está protegida </a>
            <a href=""> Nuestro centro de envío </a>
            <a href=""> Políticas de devolución </a>
        </div>
        <div class={css.Footer_text}> 
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