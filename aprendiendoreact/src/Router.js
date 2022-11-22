import React, { Component } from 'react';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom'; // In react-router-dom Switch => Routes 




import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";

class Router extends Component {

    render() {
        function PruebaParametros (){
             let params = useParams();
             let {apellidos} = useParams(); //Primera forma de declarar

             let sinApellidos = (null);

             return (
                <div>
                    <h2 className='subheader'>{params.nombre} {apellidos}</h2> {/** Segunda forma de declarar */} 
                    {sinApellidos}
                </div>
             );
        }


        return (
            <BrowserRouter>
                <Header />

                 {/** Configurar Rutas y paginas */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path = "/blog" element = {<Blog />} /> {/** Components => elements  And Decaration Components is whit <component/> */}
                    <Route exact path = "/formulario" element = {<Formulario />} /> 
                    <Route exact path = "/peliculas" element = {<Peliculas />} /> 


                    <Route exact path = "/segunda-ruta" element = {<MiComponente />} />
                    <Route path ="*" element = {<Error />} />
                    {/**Mas opciones de rutas */}
                    <Route exact path="/pagina-1" element = {
                        <div>
                            <h1>Hola mundo desde la ruta pagina1</h1>
                        </div>
                        
                    } />
                    <Route exact path ="/pruebas/:nombre" element = {<PruebaParametros/>}/>
                    <Route exact path ="/pruebas/:nombre/:apellidos" element = {<PruebaParametros/>}/>
                </Routes>

               
                    <div className="clearfix">
                        
                    </div>
                <Footer/>
            </BrowserRouter>

        )
    }

}

export default Router;