import React, { Component } from 'react';
import './form.css';
import MostrarDatos from '../components/mostrarDatos.js';
import FormData from '../../stores/formStore.js';

class Form extends Component {
state = {
  UserData: FormData.getAll(),
};
  render() {
    console.log(this.state.todos);
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
          <p>Visitantes Anteriores</p>
          <table className="Tabla">
            {  this.state.UserData.map(e => {
                return (
                  <MostrarDatos
                    name= {e.name}
                    country= {e.country}
                    age= {e.age}
                  />
                )
              })
            }
          </table>
        </div>
      </div>
    )
  }
}

export default Form;
