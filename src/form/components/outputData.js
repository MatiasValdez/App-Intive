import React from 'react';
import './outputData.css';
import ShowPrevData from './showPrevData';

function outputData(props) {
  return (
    <div>
      <p>Visitantes Anteriores</p>
      <table className="Tabla">
        <tbody>
          {  props.UserData.map(e => {
            return (
              <ShowPrevData
                key = {e.id}
                name = {e.name}
                country = {e.country}
                age = {e.age}
              />
            )
          })
        }
      </tbody>
    </table>
  </div>
  )
}

export default outputData;
