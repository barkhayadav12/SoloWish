import React from "react";
import logo from './logo.jpeg'
const Navbar = () => {
  return (
    <>
      <div style={{display:'flex',justifyContent:'center'}} class=" bg-black">
        <nav class="navbar navbar-dark bg-black d-flex justify-content-center fs-italic">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              width="170px"
              height="60px"
              class="d-inline-block align-top mx-4"
              alt=""
            />
            </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
