import React, { useState } from 'react';

const Api = ({ consumir, perfiles }) => {
  const [searchField, setSearchField] = useState('');

  const onSearchFieldChange = e => {
    setSearchField(e.target.value);
  }

  return (
    <div className="container">
      <div className='container-form'>
        <form className='form-react'>
          <div className='text-center form-group'>
            <label htmlFor='userSearch' className='form-label'>Usuario de GitHub:</label>
            <input
              id='userSearch'
              onChange={onSearchFieldChange}
              value={searchField}
              autoComplete='off'
              autoFocus
              className='form-control' />
          </div>
          <div className="text-center mt-3 form-group">
            <button
              type='button'
              onClick={() => consumir(searchField)}
              className="btn btn-success">Consumir</button>
          </div>
        </form>
      </div>
      <div className="container">
        <div className='row'>
          {
            perfiles.map(
              (item, i) => (
                <div key={i} className='col-5 col-lg-3 mb-5'>
                  <img className='img-thumbnail' src={item.avatar_url} alt="Perfil" />
                  <a className=''
                    target="_blank" rel="noreferrer" href={item.html_url}>
                    {item.login}
                  </a>
                </div>
              )
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Api;
