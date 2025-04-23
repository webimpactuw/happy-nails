import React from "react";
import "./footer.css";

function Foot() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Hours</h4>
            <ui className="list-unstyled">
              <li>Mon - Fri: 10 AM - 7 PM</li>
              <li>Sat: 10 AM - 6 PM</li>
              <li>Sat: 10 AM - 4 PM</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Location</h4>
            <ui className="list-unstyled">
              <li>3904 E Mullan Ave #F</li>
              <li>Post Falls, ID 83854 </li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact</h4>
            <ui className="list-unstyled">
              <li>208 773 4627</li>
              <li>happy@nails.com</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} WEBIMPACT | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Foot;