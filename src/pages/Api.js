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
          <div className='text-center mt-5 form-group'>
            <label htmlFor='userSearch' className='form-label'>Usuario de GitHub:</label>
            <input
              id='userSearch'
              onChange={onSearchFieldChange}
              value={searchField}
              autoComplete='off'
              autoFocus
              className='form-control' />
          </div>
          <div className="text-center mt-5 form-group">
            <button
              type='button'
              onClick={() => consumir(searchField)}
              className="btn btn-success">Consumir</button>
          </div>
        </form>
      </div>
      <div className="mt-3">
        {
          perfiles.map(
            (item, i) => (
              <div key={i}>
                <img src={item.avatar_url} alt="Perfil" />
                <a target="_blank" rel="noreferrer" href={item.html_url}>{item.login}</a>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

export default Api;
