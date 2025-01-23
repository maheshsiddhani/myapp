import React from "react";
import Header from "./components/Header/index.js";
import Sliders from './components/Sliders/index.js';
import slide1 from './images/slide1.jpeg';
import slide2 from './images/slide2.jpg';
import AboutUs from "./components/AboutUs/index.js";
import Products from "./components/Products/index.js";
import necklace from './images/necklace.jpg';
import bracelet from './images/bracelet.jpg';
import earrings from './images/earrings.jpg';
import ScrollAnimation from "./components/ScrollAnimation";
import Footer from "./components/Footer/index.js";
import './App.css';

const sliderList = [
    { uniqNo: 1, img: slide1 },
    { uniqNo: 2, img: slide2 },
];

const products = [
    { id: 1, name: 'Minimalist Necklace', price: 29.99, image: necklace },
    { id: 2, name: 'Ethnic Bracelet', price: 19.99, image: bracelet },
    { id: 3, name: 'Elegant Earrings', price: 24.99, image: earrings },
];

const App = () => (
    <div className="App">
        <header><Header /></header>
        <main>
            <Sliders sliderDetails={sliderList} />
            <AboutUs />
            <Products productList={products} />
            <Footer />
        </main>
    </div>
);

export default App;
