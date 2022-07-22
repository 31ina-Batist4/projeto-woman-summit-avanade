import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default props => {
  return (
    <div >
      <Navbar  className="div-nav"  light expand="md">
        <NavbarBrand
          className="nav-brand"
          onClick={_ => {
            props.setPage(0);
          }}
        >
          Voe com a DIO_. destino avanade
        </NavbarBrand>
      </Navbar>
    </div>
  );
};
