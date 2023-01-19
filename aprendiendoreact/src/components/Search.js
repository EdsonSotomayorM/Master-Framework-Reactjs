import React, { Component } from 'react';
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from './Articles';
import { useParams } from "react-router-dom";

function Search(){




       /* ------------ UNA FORMA DE USAR AXIOS ----------
       axios.get("http://127.0.0.1:3900/api/articles") 
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                }); //yA TENGO ACCESO A LOS ARTICULOS
            });*/

        const { search } = useParams();
        console.log(search)
        return (
            <div id="blog">
                <Slider  //Propos
                    title={ 'Busqueda : ' + search } 
                    size="slider-small"
                />
                <div className='center'>
                    <div id='content'>
                        {/**Listado del articulos que vendran del API */}


                        <Articles
                        search= {search}/>

                        {/*---------- UNA FORMA DE LISTAR LOS ARTICULOS ASSICRONAMENTE
                        this.state.status === 'success' &&
                            <div>
                                {
                                    this.state.articles.map((article) => {
                                        return (<h1 key={article._id}>{article.title}</h1>);
                                    })
                                }
                            </div>

                            */}

                    </div>
                </div>
                <Sidebar
                    blog="true"
                />
            </div>

        );
    
}

export default Search;
