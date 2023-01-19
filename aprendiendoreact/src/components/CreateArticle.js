import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar";

//Validacion de formularios y alertas

class CreateArticle extends Component {

    url = Global.url;


    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article : {},
        status : null,
        selectedFile : null
    };

    saveArticle = (e) => {

        e.preventDefault();
        
        // Rellenar state con formulario
        this.changeState();

        // Hacer una peticion HTTP por post para guardar el articulo 
        axios.post(this.url + 'save',this.state.article)
            .then (res => {
                if (res.data.article) {
                    this.setState({article: res.data.article,
                    status : 'wating'});


                    //Subir la imagen
                if (this.state.selectedFile !== null) {

                    //Sacar el id de el articulo guardado
                    var articleId = this.state.article._id;
                    //Crear un form data y anadir fichero
                    const formData = new FormData();

                    formData.append(
                        'file0',
                        this.state.selectedFile,
                        this.state.selectedFile.name
                    );
                    //Pericion ajax

                    axios.post(this.url + 'upload-image/' + articleId, formData)
                        .then(res =>{
                            if(res.data.article){
                                this.setState({
                                    article: res.data.article,
                                    status: 'success'
                                });
                            }else{
                                this.setState({
                                    article: res.data.article,
                                    status: 'failed'
                                });
                            }
                        })
                    
                }else{
                    this.setState({
                        status : 'success'});
                }
                }else{
                    this.setState({status: 'failed'});
                }
            });
    }


    changeState = () => {
        this.setState({
            article : {
                title : this.titleRef.current.value,
                content : this.contentRef.current.value
            }
        });


    }

    fileChange = (event) => {
        this.setState({
            selectedFile : event.target.files[0]
        });

        console.log(this.state);
    }
    

    render() {

        if(this.state.status === 'success'){
            return <Navigate to={'/blog'}> </Navigate>;
        }
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear Articulo</h1>
                    <form action="" className="mid-form" onSubmit={this.saveArticle}>

                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" id="" ref={this.titleRef} onChange = {this.changeState}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Titulo</label>
                            <textarea  name="content" id="" ref={this.contentRef} onChange = {this.changeState}/>
                        </div>
                        
                        <div className="form-group"> 
                            <label htmlFor="file0">Imagen</label>
                            <input type='file'  name="file0" id="" onChange={this.fileChange}/>
                        </div>

                        <input type="submit" value="Guardar" className="btn btn-success" />
                    </form>
                </section>

                <Sidebar/>
            </div>
        );
    }
}

export default CreateArticle;