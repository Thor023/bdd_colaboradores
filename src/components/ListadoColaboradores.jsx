import React from "react";
import BaseColaboradores from './BaseColaboradores';

function ListadoColaboradores() {
    return (
        <div >
            <h1>Listado de colaboradores</h1>
            {
                BaseColaboradores.map((colaborador, index) => {
                    return (
                        <div key={index}>
                            <div class="list">
                                {colaborador.nombre}--{colaborador.correo}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ListadoColaboradores;
