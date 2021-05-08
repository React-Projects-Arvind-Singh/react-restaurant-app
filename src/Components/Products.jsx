import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
function Products() {
    return (
        <div id="products">
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, labore, itaque.</p>
            <div className="a-container">
            <Productbox image={pimage1} title="Veg Burger"/>
            <Productbox image={pimage2} title="Veg Supreme Burger"/>
            <Productbox image={pimage1} title="Aalo Tikki Burger"/>
                
            </div>
        </div>
    )
}

export default Products;