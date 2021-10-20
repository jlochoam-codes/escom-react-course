import React, { useState } from "react";
import RFC from '../pages/RFC';

const RFCContainer = () => {
  const forbiddenWords = [
    "BUEI",
    "CACA",
    "CAGA",
    "CAKA",
    "COGE",
    "COJE",
    "COJO",
    "FETO",
    "JOTO",
    "KACO",
    "KAGO",
    "KOJO",
    "KULO",
    "MAMO",
    "MEAS",
    "MION",
    "MULA",
    "PEDO",
    "PENE"
  ];

  const [rfc, setRfc] = useState(['*', '*', '*', '*', '*', '*', '*', '*', '*', '*']);
  const [form, setForm] = useState({ nombre: '', ap: '', am: '', fecNac: '' });

  const onChange = (e) => {
    const currRfc = rfc; // Existing values will override the corresponding '*'
    setForm({ ...form, [e.target.name]: e.target.value });
    // RFC is made with the following format: PPMNAAMMDD###
    if (e.target.name === 'ap') {
      if (e.target.value.length > 0)
        currRfc[0] = e.target.value[0].toUpperCase();
      else currRfc[0] = '*';
      if (e.target.value.length > 1)
        currRfc[1] = e.target.value[1].toUpperCase();
      else currRfc[1] = '*';
    }
    else if (e.target.name === 'am') {
      if (e.target.value.length > 0)
        currRfc[2] = e.target.value[0].toUpperCase();
      else currRfc[2] = '*';
    }
    else if (e.target.name === 'nombre') {
      if (e.target.value.length > 0)
        currRfc[3] = e.target.value[0].toUpperCase();
      else currRfc[3] = '*';
    }
    else {
      if (e.target.value.length > 0) {
        const formattedDate = e.target.value.substring(2).replace(/-/g, '');
        for (let i = 0; i < 6; i++)
          currRfc[i + 4] = formattedDate[i];
      }
      else {
        for (let i = 4; i < 10; i++)
          currRfc[i] = '*';
      }
    }
    // If something other than nombre changes (ap or am),
    // maybe the formed word is now not forbidden, and we
    // should replace the 'X' with the first nombre char
    if (e.target.name !== 'nombre')
      currRfc[3] = form.nombre.charAt(0).toUpperCase();
    const rfcLetters = currRfc.toString().replace(/,/g, '').substring(0, 4);
    if (forbiddenWords.includes(rfcLetters))
      currRfc[3] = 'X';
    setRfc(currRfc);
  }

  return (
    <RFC
      rfc={rfc}
      form={form}
      onChange={onChange}
    />
  )
};

export default RFCContainer;
