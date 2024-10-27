import React from "react";
import ProductList from "../ProductList.json";
import "../../public/SCSS/product.scss";

console.log(ProductList);
function Product() {
  return (
    <div className="card-div">
      {ProductList.map((product) => {
        const {
          productId,
          productName,
          productDesc,
          productFeature,
          productPrice,
          productColor,
          productWarranty,
        } = product;
        return (
          <div className="card">
            <div className="card-image">
              <img src={`/images/${productId}.jpeg`} alt={productName} />
            </div>
            <div className="card-body">
              <h2 className="product-name">{productName}</h2>
              <h5 className="product-id">Product ID : {productId}</h5>
              <p className="product-desc">{productDesc}</p>
              <ul className="product-frature">
                {productFeature.map((feature) => (
                  <li key={feature[1]}>{Object.values(feature)[0]}</li>
                ))}
              </ul>
              <div className="product-price">
                {productPrice.map((price) => (
                  <p key={price.baseModel}>
                    {Object.keys(price)[0]}: {Object.values(price)[0]}
                  </p>
                ))}
              </div>
              <div className="product-color">
                Colors :
                {productColor.map((color) => (
                  <p>{color}</p>
                ))}
              </div>
              <h4>{productWarranty}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
