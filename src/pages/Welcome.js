import React from "react";

const Welcome = ({ form, goBack, data }) => (
  <div className="main">
    <div className="text-center">
      <h2 className="static-data pt-5">Welcome, {form.email}</h2>
    </div>
    <div className="text-center">
      <button onClick={goBack} className="btn btn-success">Go back</button>
    </div>
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(
              // item = each object in the iterable
              // i = iterator
              (item, i) => (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>

    </div>
  </div>
);

export default Welcome;
