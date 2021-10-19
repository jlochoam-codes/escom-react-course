import React from 'react';

const RFC = ({
  rfc,
  form,
  onChange
}) => (
  //<Fragment>
  <>
    <div className='container mt-5'>
      <form className='form mx-auto' autoComplete='off'>
        <div className='form-group'>
          <label>Nombre:</label>
          <input
            value={form.nombre}
            className='form-control'
            type="text"
            name="nombre"
            onChange={onChange}
          />
        </div>
        <div className='form-group mt-3'>
          <label>Apellido paterno:</label>
          <input
            value={form.ap}
            className='form-control'
            type="text"
            name="ap"
            onChange={onChange}
          />
        </div>
        <div className='form-group mt-3'>
          <label>Apellido materno:</label>
          <input
            value={form.am}
            className='form-control'
            type="text"
            name="am"
            onChange={onChange}
          />
        </div>
        <div className='form-group mt-3'>
          <label>Fecha de nacimiento:</label>
          <input
            value={form.fecNac}
            className='form-control'
            type="date"
            name="fecNac"
            onChange={onChange}
          />
        </div>
      </form>
      <div className='text-center mt-5 txt-rfc'>
        {rfc[0]}{rfc[1]}{rfc[2]}{rfc[3]}{rfc[4]}{rfc[5]}{rfc[6]}{rfc[7]}{rfc[8]}{rfc[9]}-###
      </div>
    </div>
  </>
  //</Fragment>
);

export default RFC;
