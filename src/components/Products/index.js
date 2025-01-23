import React from "react";
import './products.css';
import ScrollAnimation from "../ScrollAnimation";

const Products = ({productList}) =>(
    <section id="products">
    <div className="products">
        {productList.map(product => (
            <ScrollAnimation key={product.id}>
            <div className="product-card fade-in">
                <img src={product.image} alt={product.name}/>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </div>
            </ScrollAnimation>
        ))}
    </div>
    </section> 
);

export default Products;