import React, { Component } from 'react';
import './form.css';
import MostrarDatos from '../components/mostrarDatos.js';

class Form extends Component {

  render() {
    return (
      <div className="ContainerForm">
        <form className="FormInput">
          <div className="Col1">
            <label>Nombre:</label>
              <input
                type="text"
                id="Nombre"
                ref=""
               ></input>
            <label>Pais:</label>
              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            <label>Edad:</label>
              <input
                type="text"
                id="Edad"
                ref=""
              ></input>
              <input type="submit" value="Saludar" className="Saludar" />
          </div>
        </form>
        <div className="FormOutput">
          <MostrarDatos />
        </div>
      </div>
    )
  }
}

export default Form;
