import React, { Component } from "react";

import MiComponente from "./MiComponente";


class SeccionPruebas extends Component {

    contador = 0;

   /* constructor(props){
        super(props);

        this.state = {
            contador : 0
        };
    }*/

    state = { //Estado o state
        contador : 0
    };

    HolaMundo(nombre, edad) 
    {
        var presentacion = (
          <div>
            <h2>Hola! Soy {nombre}</h2>
            <h3>Tengo: {edad} años</h3>
          </div>
        );
        return presentacion;
    }

    //State o Estado, funcion dinamica de la pagina web
    sumar = (e) =>{
        
        this.setState({
            contador : (this.state.contador + 1)
        });

    }
    restar = (e) =>{

       this.setState({
        contador : (this.state.contador - 1)
    });
    }

    render() {
        var nombre = "Edson Sotomayor Manzano ";
        return (
        
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>

                <p>Hola Bienvenido al curso de React</p>

                <h2 className="subheader">Funciones y jsx basico</h2>
                {this.HolaMundo(nombre, 21)}

                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />

                    <MiComponente />

                </section>

                <h2 className="subheader">Estado</h2>

                <p>Contador : { this.state.contador }</p>

                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                </p>
            </section>
        );
    }
}

export default SeccionPruebas;
