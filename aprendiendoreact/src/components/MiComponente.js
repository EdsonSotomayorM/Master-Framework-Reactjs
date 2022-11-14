import React, {Component} from "react";

class MiComponente extends Component {

    render(){

        let receta = {
            nombre : 'Pizza',
            ingedientes : ['tomate','Queso','Jamon cocido'],
            calorias: 400
        };
        return (
            <div className="Mi-componente">
                <h1> {'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorias:' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingedientes.map((ingrediente,i) =>{
                            return (
                                <li key = {i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr/>
            </div>
            
            
        );
    }

}

export default MiComponente;