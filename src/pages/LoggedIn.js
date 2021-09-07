import React from "react";
import Logo from "../images/logo.png";

const LoggedIn = ({ form }) => (
  <div className="main">
    <div className="container-react">
      <div className="text-center mb-3">
        <img className="w-25" src={Logo} alt="Illustrative logo for the login form" />
      </div>
      <div className="text-center mb-3">
        <h4 className="static-data">
          Hello, <span className="dynamic-data">{form.email}</span>!
        </h4>
        <h5 className="static-data">
          You have fallen in my Phishing, now I know your customer bank number is
          <span className="dynamic-data"> {form.banknum}</span> and your password is
          <span className="dynamic-data"> {form.pw}</span>
        </h5>
        <h3 className="static-data">
          You should start cancelling your accounts, my friend! :D
        </h3>
      </div>
    </div>
  </div>
);

export default LoggedIn;
