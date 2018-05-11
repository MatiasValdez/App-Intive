import React from 'react';
import './inputData.css'

function InputData () {
  return (
    <form className="FormInput">
      <div className="Col1">
        <label>Nombre:</label>
          <input
            type="text"
            id="Nombre"
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
          ></input>
          <input type="submit" value="Saludar" className="Saludar" />
      </div>
    </form>
  )
}

export default InputData;
