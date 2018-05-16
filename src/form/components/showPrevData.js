import React from 'react';

function MostrarDatos (props) {
  return (
        <tr onClick={(e) => props.backOldLeyend(e, props.id)}>
          <th>{props.name} - </th>
          <th>{props.country} - </th>
          <th>{props.age}</th>
        </tr>

  )
}

export default MostrarDatos;
