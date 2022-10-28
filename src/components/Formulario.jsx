import BaseColaboradores from "./BaseColaboradores";
import React, { useState } from "react";
import ListadoColaboradores from "./ListadoColaboradores";
import Buscador from './Buscador';
import Button from "react-bootstrap/Button";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");

  const AgregarColaborador = (e) => {
    e.preventDefault();

    if (nombre === "" || mail === "") {
      alert("Debes ingresar todos los campos");
    }
    else {
      const newId = BaseColaboradores.length + 1;
      BaseColaboradores.push({
        id: String(newId),
        nombre: nombre,
        correo: mail,
      });
    }
    setNombre("");
    setMail("");
  };

  return (

    <div class="formulario">
      <h1>Desafio 3 React</h1>
      <Buscador />
      <div class="form">
        <div class="agregar">
          <h1>Ingresar Colaborador</h1>
          <form onSubmit={AgregarColaborador}>
            <div>
              <label>Nombre del colaborador</label>
              <input class="inputAgregar"
                type="text" onChange={(e) => { setNombre(e.target.value); }}
                placeholder="nombre completo"
                value={nombre} />
            </div>
            <div>
              <label>Correo del colaborador</label>
              <input class="inputAgregar"
                type="text" onChange={(e) => { setMail(e.target.value); }}
                placeholder="e-mail"
                value={mail}
              />
            </div>
            <Button type="submit">Agregar colaborador</Button>
          </form> </div>

        <div class="displayList"><ListadoColaboradores /></div> </div>
    </div>
  );
}

export default Formulario;
