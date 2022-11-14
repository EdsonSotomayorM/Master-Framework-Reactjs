import React, { Component } from 'react';

import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Blog extends Component {
    render() {
        
        return (
            <div id="blog">
                <Slider  //Propos
                    title="Blog"
                    size="slider-small"
                />
                <div className='center'>
                    <div id='content'>
                        {/**Listado del articulos que vendran del API */}
                    </div>
                </div>
                <Sidebar 
                    blog = "true"
                />
            </div>
            
        )
    }
}

export default Blog;
