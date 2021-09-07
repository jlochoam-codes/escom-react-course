import React from "react";
import Logo from "../images/logo.png";

const Index = ({ form, onChange, onSubmit }) => (
  <div className="main">
    <div className="container-form">
      <form onSubmit={onSubmit} className="form-react">
        <div className="text-center">
          <img className="w-50" src={Logo} alt="Illustrative logo for the login form" />
        </div>
        <div className="text-center">
          <h3>{form.banknum}</h3>
        </div>
        <div className="form-group my-2">
          <label htmlFor="email" className="form-label">Email address</label>
          <input onChange={onChange} value={form.email} type="email" className="form-control" id="email" placeholder="name@example.com" autoFocus />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="banknum" className="form-label">Customer number</label>
          <input onChange={onChange} value={form.banknum} type="number" className="form-control" id="banknum" placeholder="11223344" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="pw" className="form-label">Password</label>
          <input onChange={onChange} value={form.pw} type="password" className="form-control" id="pw" placeholder="Your_P4ssw0rd" />
        </div>
        <div className="text-center d-grid gap-2 col-8 mx-auto">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
);

export default Index;
