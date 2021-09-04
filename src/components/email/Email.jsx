import React from "react";
import { FiMail } from "react-icons/fi";

function Email() {
  return (
    <div className="email">
      <div className="email1">
        <FiMail />
        <div className="txt">
          <h2>Subscribe To Our Newsletter</h2>
          <p>Get all the latest information on Events, Sales and Offers.</p>
        </div>
      </div>
      <div className="email2">
        <input type="text" placeholder="Your Email Address" />
      </div>
      <div className="email3">
        <button>subscribe now!</button>
      </div>
    </div>
  );
}

export default Email;
