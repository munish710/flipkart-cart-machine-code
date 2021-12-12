import React, { useContext } from "react";
import { mockProducts } from "../../mockData/mockProducts";
import ProductCard from "../ProductCard/ProductCard";
// import { FilterContext } from "../../context/filter-context";

import "./ProductsList.css";

const ProductsList = () => {
  // const { filteredProducts } = useContext(FilterContext);

  return (
    <div className="products-list">
      {mockProducts.length > 0 ? (
        mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p>Sorry No such Product exists, Clear Filters and Try Again</p>
      )}
    </div>
  );
};

export default ProductsList;
