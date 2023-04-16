import React from "react";
// Here we import the Header.css file to grant access to some additional classNameNames
import "../styles/Header.css";
import '../styles/Basic.css';

const myname = ['J', 'o', 'h', 'n', ' ', 'L', 'e', 'a', 'm', 'y']
// My name, opening title (what the client will see when they open the webpage)
function Header() {
  const nameEffect = myname.map((letter, index) => 
    <span className ="nameletter l" style={`--i:${index}`}>{letter}</span>
  )

  console.log(nameEffect)

  return (
    <section className="one">
      <div className="homepage">
        <div className="title">
          <h1 className="name">
            John Leamy
          </h1>
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
/* 
const x = 0
myname.map((letter, index) => {
  <span className ="nameletter l" style=`--i:{index}`
})
*/