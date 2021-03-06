import React from 'react';
import './outputData.css';
import ShowPrevData from './showPrevData';

function outputData(props) {

  return (
    <div className="ContainerTable">
      <p>Visitantes Anteriores</p>
      <table className="Table">
        <tbody>
          {  props.userData.map(e => {
            return (
              <ShowPrevData
                key = {e.id}
                id = {e.id}
                name = {e.name}
                country = {e.country}
                age = {e.age}
                backOldLeyend = {props.backOldLeyend}
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
