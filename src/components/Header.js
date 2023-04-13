import React from "react";
// Here we import the Header.css file to grant access to some additional classNameNames
import "../styles/Header.css";

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <section className="one">
      <div className="homepage">
        <div className="title">
          <h1 className="name">John Leamy</h1>
          <p>Full Stack Web Developer, Business Graduate, and Creator</p>
        </div>
      </div>
      <div className="welcome">
        <h2>Welcome to My Portfolio.</h2>
      </div>
    </section>
  );
}

export default Header;
