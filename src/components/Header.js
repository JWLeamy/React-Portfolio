import React from "react";
// Here we import the Header.css file to grant access to some additional classNameNames
import "../styles/Header.css";
import "../styles/Basic.css";


// My name, opening title (what the client will see when they open the webpage)
function Header() {
  const name = "Welcome";

  return (
    <section className="one">
      <div className="homepage">
        <div className="title">
          <h1 className="opening l">
            {[...name].map((letter, index) => (
              <span className="nameletter l" style={{ "--i": index + 1 }}>
                {letter}
              </span>
            ))}
          </h1>
        </div>
        <h2 className="nameintro">
          <p>I'm John.</p>
        </h2>
        <div className="content">
          <div className="containers">
            <p className="text">I develop</p>
            <ul className="list">
              <li className="item">organized</li>
              <li className="item">efficient</li>
              <li className="item">creative</li>
              <li className="item">effective</li>
            </ul>
            <p className="closetext">Full-Stack applications.</p>
          </div>
        </div>
      </div>
      <div className="appear">
        <div className="welcome">
          <h2>About me Works Resume</h2>
        </div>
      </div>
    </section>
  );
}

export default Header;
/* 
const x = 0
myname.map((letter, index) => {
  <span className ="nameletter l" style=`--i:{index}`
})
*/
