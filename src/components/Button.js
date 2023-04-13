import React from 'react';
import * as $ from 'jquery'
// Here we import the Navbar.css file to grant access to some additional classNameNames
import '../styles/Navbar.css';
import '../styles/Basic.css';

function setNav() {

    if (($(".navbar").width()) === (0)){
        console.log("nav is opening")
        openNav()
    } else {
        console.log("nav is closing")
        closeNav()
        } 
    }

function openNav() {
  $(".navbar").css("width", "15%");
  $(".navbar").css("margin-Left", "15%");
  $("main").css("padding-left", "15%")
  $(".navbut").css("visibility", "visible");
  $(".icon svg").css("transform", "rotate(135deg)")
}

function closeNav() {
  $(".navbar").css("width", "0");
  $("main").css("padding-left", "0")
  $(".navbar").css("margin-Left", "0");
  $(".navbut").css("visibility", "collapse");
  $(".icon svg").css("transform", "rotate(-45deg)")
}



function Button() {

  return (
    <span className="menubutton" onClick={setNav}>
            <div className="wrapper">
                <div className="link_wrapper">

                    <p className="abut">&#9776;</p>

                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                            <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </span>
  );
}

export default Button;
