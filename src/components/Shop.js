import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Product from "./Product";

const Shop = () => {
  const [producrts, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   handle click add to cart button
  const handleProductClick = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <section>
      <div className="grid grid-cols-6 max-w-7xl mx-auto mt-10">
        <div className="col-span-5 grid lg:grid-cols-3 md:grid-cols-2 gap-[45px]">
          {producrts.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleProductClick={handleProductClick}
            />
          ))}
        </div>

        {/* this is order section */}
        <div className="col-span-1">
          <Cart cart={cart} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
