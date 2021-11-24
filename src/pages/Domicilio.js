import React from 'react';

const Domicilio = ({
  form,
  onChange,
  asentamientos
}) => (
  <div className="container pt-5">
    <div className="form-group">
      <label>Código postal</label>
      <input className="form-control" type="text" onChange={onChange} value={form.cp}
        placeholder="Ingrese el código postal" />
    </div>
    <div className="row mt-5">
      <p>Estado: {form.estado}</p>
      <p>Municipio: {form.municipio}</p>
      <p>Ciudad: {form.ciudad}</p>
      <select>
        {
          asentamientos.map((asentamiento, index) => (
            <option key={index} value={asentamiento}>{asentamiento}</option>
          ))
        }
      </select>
    </div>
  </div>
);

export default Domicilio;
