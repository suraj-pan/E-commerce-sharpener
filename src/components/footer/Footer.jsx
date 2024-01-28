import React from "react";
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <h5>About Us</h5>
            <p>We are specialize in creating quality websites and applications.</p>
          </div>
          <div className="col-sm-4">
            <h5>Address</h5>
            <p>Chittorgarh</p>
            <p>Rajasthan</p>
          </div>
          <div className="col-sm-4">
            <h5>Contact Us</h5>
            <p>Phone: 123456789</p>
            <p>Email: sky.deep.1997@gmail.com</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 text-center">
            <hr />
            <p className="text-muted">&copy; 2024 developed by suraj. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
