import React from "react";

const Product = ({ product, handleProductClick }) => {
  const {
    img,
    name,
    price,
    seller,
    ratings,
  } = product;
  return (
    <div className="h-[508px] w-[300px] border rounded-[7px] relative">
      <img
        src={img}
        className="w-[286px] h-[286px] m-[7px] rounded-[8px]"
        alt=""
      />
      {/* profuct info */}
      <div className="m-[12px]">
        <h3 className="text-[21px]">{name}</h3>
        <h3 className="text-[17px] mt-[11px]">Price: ${price}</h3>
        <h3 className="text-[12px]">Seller: {seller}</h3>
        <h3 className="text-[12px]">Rating: {ratings}</h3>
      </div>
      <button
        onClick={() => handleProductClick(product)}
        className="bg-[#FFE0B3] hover:bg-orange-300 w-full h-[48px]  absolute rounded-b-[8px] bottom-0 text-[15px]"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
