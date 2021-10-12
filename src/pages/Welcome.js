import React from "react";

const Welcome = ({ form, goBack, data, item, onChange, add, remove }) => (
  <div className="main">
    <div className="text-center">
      <h2 className="static-data pt-5">Welcome, {form.email}</h2>
    </div>
    <div className="text-center mt-4">
      <button onClick={goBack} className="btn btn-success">Go back</button>
    </div>
    <div className="container mt-4">
      <form onSubmit={add}>
        <div className="row">
          <div className="col-md-4 form-group">
            <label className="static-data">ID:</label>
            <input required autoComplete="off" name="id" className="form-control" type="text" placeholder="ID" onChange={onChange} value={item.id} />
          </div>
          <div className="col-md-8 form-group">
            <label className="static-data">Name:</label>
            <input required autoComplete="off" name="name" className="form-control" type="text" placeholder="Name" onChange={onChange} value={item.name} />
          </div>
        </div>
        <div className="text-end mt-4">
          <button type="submit" className="btn btn-success">Add</button>
        </div>
      </form>
    </div>
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col" className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(
              // item = each object in the iterable
              // i = identifier of each mapped element
              (mapItem, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{mapItem.id}</td>
                  <td>{mapItem.name}</td>
                  <td className="text-center">
                    <button className="btn btn-danger" onClick={rm => remove(i)}>X</button>
                  </td>
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
