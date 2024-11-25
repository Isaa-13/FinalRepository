import React, {Component} from "react";
import classNames from "classnames";
import css from "./Product.Card.module.css";
class ProductCard extends Component {

    constructor (props) {
        super(props);

    }

    componentDidMount() {
        console.log("ProductCard mounted");
    }
    componentDidUpdate() {
        console.log("ProductCard updated");
    }
    componentWillUnmount() {
        console.log("ProductCard unmounted");
    }

    

    render() {

        const { className, product} = this.props;
        return (
                <div className = {classNames(css.ProductCard, className)} >
                    <div className={css.ProductCard_header}>
                        <img src={product.image} alt="Product" />
                    </div>

                    <div className={css.ProductCard_body}>
                            <h2 className={css.ProductCard_name}> {product.name}</h2>
                        <p>{product.description} </p>
                        <p> {product.price} </p>
                    </div>
                    <button className={css.ProductCard_button}> Add to cart </button>
                    </div>
        )
    }
}

export default ProductCard;