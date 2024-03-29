import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from '../Global';

class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null
    }

    componentWillMount() {
        var home = this.props.home;
        var search = this.props.search;
        if(home === 'true'){
            this.getLastArticles();
        }else if (search && search !== null && search !== undefined){
            this.getArticlesbySearch(search);
        }
        
        else{
            this.getArticles();
        }
      
    }


    getLastArticles = () => {
        axios.get(this.url + "/articles/last")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
                
            });
    }

    
    getArticlesbySearch = (search) => {
        axios.get(this.url + "search/" + search)
            .then(res => {               
                    this.setState({
                        articles: res.data.articles,
                        status: 'success'
                    });    
            }).catch(err => { 
                this.setState({
                    articles: [],
                    status: 'success'
                }); 
            });
    }


    getArticles = () => {
        axios.get(this.url + "/articles")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
                
            });
    }


    render() {

        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {
                return (
                    <article key = {article._id} className='article-item' id='article-template'>
                        <div className='image-wrap'>

                            {article.image !== null ? (
                                  <img src={this.url+'get-image/'+ article.image}  alt={article.title}/>
                                ) : (
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"  alt="description of image"/>
                                )
                            }
                        </div>

                        <h2>{article.title}</h2>
                        <span className='date'>
                           <Moment locale="es" fromNow>{article.Date}</Moment> 
                        </span>
                        <Link to={'/blog/articulo/' + article._id}>Leer más</Link>
                        
                        <div className='clearfix'></div>
                    </article>
                );
            });



            return (
                <div id="articles">
                   {listArticles}
                </div>
            );
        } else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h2 className='subheader'>No hay articulos que mostrar</h2>
                    <p>Todavia no hay contenido en esta seccions</p>
                </div>
            )
        } else {
            return (
                <div id="articles">
                    <h2 className='subheader'>Cargando...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            )
        }

    }

}

export default Articles;