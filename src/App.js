import React from "react";
import Header from "./Header.js";
import Sliders from './Slider.js'
import './App.css'


const App = () => {
    return(
        <div className="App">
            <header><Header /></header>
            
            <main>
                <Sliders />
            </main>

        </div>
    );
};

export default App;