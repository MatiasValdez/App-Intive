import React from 'react';

function MostrarDatos (props) {
  return (
        <tr>
          <th>{props.name} - </th>
          <th>{props.country} - </th>
          <th>{props.age}</th>
        </tr>

  )
}

export default MostrarDatos;
