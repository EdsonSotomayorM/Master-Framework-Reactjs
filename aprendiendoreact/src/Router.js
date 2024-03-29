import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams,Navigate  } from "react-router-dom";// In react-router-dom Switch => Routes 




import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
 
class Router extends Component {

    render() {
        /*function PruebaParametros (){
             let params = useParams();
             let {apellidos} = useParams(); //Primera forma de declarar

             let sinApellidos = (null);

             return (
                <div>
                    <h2 className='subheader'>{params.nombre} {apellidos}</h2> {/** Segunda forma de declarar *///} 
                    /*{sinApellidos}
                </div>
             );
        }*/
        function GetParamsRedirect(){

            let params = useParams();

            return (<Navigate to={'/blog/busqueda/'+params.search} />)

        };
        return (
            <BrowserRouter>
                <Header />

                 {/** Configurar Rutas y paginas */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="blog/articulo/:id" element={< Article />}/>
                    <Route exact path="blog/crear" element={< CreateArticle />}/>
                    <Route exact path = "/blog" element = {<Blog />} /> {/** Components => elements  And Decaration Components is whit <component/> */}
                    <Route exact path = "/formulario" element = {<Formulario />} /> 
                    <Route exact path = "/peliculas" element = {<Peliculas />} /> 
                    <Route exact path = "/blog/busqueda/:search" element = {<Search />} /> 

                    <Route exact path="/redirect/:search" element={<GetParamsRedirect/>} />

                    <Route exact path = "/segunda-ruta" element = {<MiComponente />} />
                    <Route path ="*" element = {<Error />} />
                    {/**Mas opciones de rutas */}
                    <Route exact path="/pagina-1" element = {
                        <div>
                            <h1>Hola mundo desde la ruta pagina1</h1>
                        </div>
                        
                    } />
                 
                </Routes>

               
                    <div className="clearfix">
                        
                    </div>
                <Footer/>
            </BrowserRouter>

        )
    }

}

export default Router;