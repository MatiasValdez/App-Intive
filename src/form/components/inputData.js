import React from 'react';
import './inputData.css';

function InputData (props) {
  const pais = props.countries.paises;

  return (
    <form className="FormInput">
      <div className="Col1">

        <label>Nombre:</label>
          <input
            ref={props.inputRefName}
            type="text"
            id="Name"
            // placeholder = "Ingrese su nombre"
           ></input>

        <label>Pais:</label>
          <select
            ref={props.inputRefCountry}
            required
            defaultValue="Argentina"
          >
            {
              pais.map((country) => {
                return <option
                  value = {country.name}
                  key={country.name}
                >{country.name}</option>
              })
            }
          </select>

        <label>Edad:</label>
          <input
            ref={props.inputRefAge}
            type="date"
            id="Age"
          ></input>

          <input onClick={(e) => props.submitData(e)} type="submit" value="Saludar" className="Saludar" />
      </div>
    </form>
  )
}

export default InputData;
