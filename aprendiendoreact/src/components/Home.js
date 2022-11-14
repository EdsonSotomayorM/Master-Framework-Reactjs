import React, { Component } from 'react';

import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Home extends Component {
    render() {
        
        return (
            <div id="Home">
                <Slider  //Propos
                    title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
                    btn = "Ir a Blog"
                    size = "slider-big"
                />
                <div className='center'>
                    <div id='content'>
                        <h1 className="subheader">Ultimos articulos</h1>
                    </div>
                </div>
                <Sidebar />
            </div>
            
        )
    }
}

export default Home;
