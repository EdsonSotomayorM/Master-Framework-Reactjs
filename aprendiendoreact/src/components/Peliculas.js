import React, { Component } from "react";
// import MensajeEstatico from "./MensajeEstatico";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {

    state = {};

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        //var random = Math.floor(Math.random() * 3);
        peliculas[0].titulo = " Batman begins";

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => { //Recibiendo datos del hijo al padre
        console.log('Favorita Marcada');
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });
    }


    componentWillMount() { //ciclo de vida
        // alert("Se va a montar el componente");         
        this.setState({
            peliculas: [
                { titulo: 'Batmas vs Superman', image: "https://img2.rtve.es/i/?w=1600&i=1658157293020.jpg" },
                { titulo: 'Gran Torino', image: "https://i.blogs.es/cd5a41/gran-torino-01_500/450_1000.jpg" },
                { titulo: 'Looper', image: "https://hbomax-images.warnermediacdn.com/images/GYGa0pQQsjlXCeQEAAADJ/tileburnedin?size=1280x720&partner=hbomaxcom&v=d382bcbdf506a575c597839d837afc9f&host=art-gallery.api.hbo.com&language=es-419&w=1280" }
            ],
            nombre: 'Edson Sotomayor',
            favorita: {}
        });
    }


    /*componentDidMount(){ //ciclo de vida
        alert('Ya se ha montado el componente');
    }

    componentWillUnmount(){
        alert('Me voy a desmontar');
    }*/

    render() {
        return (
            <div>
                <Slider
                    title="Peliculas"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content" className="peliculas">

                        <h3 className="subheader">Listado de Peliculas</h3>
                        <p>Seleccion de las hola mundo  de {this.state.nombre} </p>
                        <p> <button onClick={this.cambiarTitulo}>Cambiar titulo</button></p>
                        {
                            this.state.favorita.titulo ? ( //condiciones para la pelicula favorita (if)
                                <p className="favorita">
                                    <strong>La pelicula favorita es: </strong><span>{this.state.favorita.titulo}</span>
                                </p>) : (
                                <p>NO HAY PELICULA FAVORITA</p>
                            )

                        }

                        {/** Crear Componente Pelicula */}

                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula key={i}
                                            pelicula={pelicula}
                                            indice={i}
                                            marcarFavorita={this.favorita} //Pasando datos del componetne padre al hijo

                                        /> //Props de componente padre a componente Hijo 
                                    )
                                })

                            }
                        </div>

                    </div>
                    <Sidebar
                        blog="false"
                    />
                </div>
            </div>
        );
    }
}

export default Peliculas;
