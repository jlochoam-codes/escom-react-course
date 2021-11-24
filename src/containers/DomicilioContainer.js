import React, { useState } from 'react';
import Domicilio from '../pages/Domicilio';
import states from '../data/states.json';

const DomicilioContainer = () => {
  const [form, setForm] = useState({ cp: '', estado: '', municipio: '', ciudad: '' });
  const [asentamientos, setAsentamientos] = useState([]);

  const onChange = ({ target }) => {
    let cp = target.value;
    if (cp.length > 5)
      return;
    setForm({ ...form, cp: cp }); // key : value
    if (cp.length === 5) {
      const resultados = states.filter(state => state.cp === parseInt(cp, 10));
      if (resultados.length > 0) {
        setForm({
          cp: resultados[0].cp,
          estado: resultados[0].estado,
          municipio: resultados[0].municipio,
          ciudad: resultados[0].ciudad
        });
        const arrAsentamientos = [];
        resultados.forEach(state => arrAsentamientos.push(state.asentamiento));
        setAsentamientos(arrAsentamientos);
      }
    }
    else {
      setAsentamientos([]);
    }
  }

  return (
    <Domicilio
      onChange={onChange}
      form={form}
      asentamientos={asentamientos}
    />
  )
};

export default DomicilioContainer;
