import React, { Component } from 'react';
import { useParams,Link } from "react-router-dom";
// importando modulos de las paginas
import Global from '../Global';
import Sidebar from './Sidebar';
import axios from "axios";
import Moment from 'react-moment';
import 'moment/locale/es'; 

 
const url = Global.url;
 
 
export default function Details() {
 
    const { id } = useParams();
    const [article, setArticle] = React.useState(null);
    React.useEffect(() => {
        axios.get(url + 'article/' + id).then((response) => {
            setArticle(response.data.article);
 
        });
    }, []);
 
    if (!article) return null;
    return (
 
        <div className="center">
            <section id="content">
                {article &&
                    <article className="article-item article-detail" >
 
                        <div className="image-wrap">
                            {article.image !== null ? (
                                  <img src={url+'get-image/'+ article.image}  alt={article.title}/>
                                ) : (
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"  alt="description of image"/>
                                )
                            }
                        </div>
 
                        <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment locale ='es' fromNow>{article.Date}</Moment>
                            </span>
                            <p>
                               {article.content}
                            </p>    
                          
                            <Link to="/blog" className='btn btn-danger'>Eliminar</Link>
                            <Link to="/blog" className='btn btn-warning'>Editar</Link>
                            <div className="clearfix"></div>
                        </article>

                    }




                </section>
                <Sidebar />
            </div>
        );
    }

