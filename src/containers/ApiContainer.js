import React, { useState } from 'react';
import Api from '../pages/Api';
import Request from '../async/request';

const ApiContainer = () => {
  const [perfiles, setPerfiles] = useState([]);
  const consumir = async (query) => {
    if (query === '') return;
    let request = new Request("GET", null, false, `search/users?q=${query}+in:login`);
    let respose = await request.exec();
    console.log(respose);
    setPerfiles(respose.items);
  }

  return (
    <Api
      perfiles={perfiles}
      consumir={consumir}
    />
  )
};

export default ApiContainer;
