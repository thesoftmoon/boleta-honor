import React from "react";

function Footer() {
  const copyName = "Boletaz";
  let copyYear = `${copyName} | ${new Date().getFullYear()}`;
  return (
    <div>
      <footer className="row">
        <div className="col-12">
          <p className="footer-text">{copyYear}</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
