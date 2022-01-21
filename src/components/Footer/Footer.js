import React from "react";
import "./style.css";
export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="container p-4 footer-color"
        style={{ backgroundColor: "rgba(36, 40, 36, 0.9)", color: "white" }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <img
              src="https://myways.ai/static/media/newFavicon.a6e8cb85.png"
              alt=""
              width={75}
              height={75}
              className="d-inline-block align-text-top"
              style={{ float: "left" }}
            />
            <h2 className="inine" style={{ marginLeft: "90px" }}>
              MyWays
            </h2>
            <br />
            <br />
            TermsPrivacy Policy
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h1 style={{ float: "left", marginLeft: "500px" }}>
              <i class="fab fa-whatsapp"></i>
            </h1>
            <h1 style={{ marginLeft: "570px" }}>
              <i class="fab fa-telegram-plane"></i>
            </h1>
          </div>
          <p style={{ marginLeft: "1050px" }}> © Copyright MyWays 2020</p>
        </div>
      </div>
    </footer>
  );
}
