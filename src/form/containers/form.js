import React, { Component } from 'react';
import './form.css';
import ShowData from '../components/showData.js';
import InputData from '../components/inputData.js';
import FormData from '../../stores/formStore.js';


class Form extends Component {
state = {
  UserData: FormData.getAll(),
};
  render() {
    console.log(this.state.todos);
    return (
      <div className="ContainerForm">
          <InputData />
        <div className="FormOutput">
          <p>Visitantes Anteriores</p>
          <table className="Tabla">
            {  this.state.UserData.map(e => {
                return (
                  <ShowData
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
