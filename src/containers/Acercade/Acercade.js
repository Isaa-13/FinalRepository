import { Link } from "react-router-dom";
import css from "./Acercade.modules.css";


const Acercade = ()  => {
     <body>
        <nav> 
            <ul> 
                <li> <Link to="/about" > inicio</Link> </li>
                <li> <Link to="/Cart" > Carrito</Link></li>
                <li> <Link to="/Acercade" > Acerca de</Link></li>
            </ul>

        </nav>

        <section class="About_text">
    <div className={css.Acerca_texto}>
        <h1> Sobre nosotros</h1>
        <p> Somos una tienda dedicada 100% a la venta de equipo de sonido. Contamos con 6 años de experiencia en este rubro.
            Deseamos colocarnos como unas de las mejores tiendas comercializadoras de audio en internet. </p>

        <h3> Misión </h3>
        <p> Ser reconocida como una de las tiendas comercializadoras de audio más confiables. </p>
        <h3> Visión</h3>
        <p> Dominar el mercado digital en 6 años con la logística característica de Apolo</p>
        <h3> Valores</h3>
        <p>Confianza</p>
        <p> Seguridad</p>
        <p>Responsabilidad </p>
        <p> Efectividad</p>
        <p> trato con el cliente</p>
        <video src="../../assets/Bg_video.mp4" autoplay loop muted preload="auto"> </video>
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

}


export default Acercade;