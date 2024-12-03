import { ProductCard } from "../../components";
import { products } from "../../utils/Products";
import css from "./AboutUsPage.module.css";

const AboutUsPage = () => {
    return (
       <body> <div> 
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
        <section class="Promociones">
            <div class={css.TextProm}>
                <h1>Promociones </h1>
                 </div>
                 <div> 
                    <div> <img src=""/> </div>
                    <div> 
                        <h3> </h3>
                        <h4> </h4>
                        <h5> </h5>
                        
                    </div>
                 </div>

        </section>
        </body>
        
    ) ;
}

export default AboutUsPage;