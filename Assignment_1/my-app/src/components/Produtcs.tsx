import React from "react";
import Product from "./Product";
import "../../public/SCSS/product.scss";
import Foote from "./Foote";

function Produtcs() {
  return (
    <div>
      <Product />
      <Foote
        reservation="&copy; All right reserved"
        myemail="das.supriyo07@gmail.com"
      />
    </div>
  );
}

export default Produtcs;
