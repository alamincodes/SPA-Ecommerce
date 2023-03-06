import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Product from "./Product";
import { addToDb, getStoredCart } from "../utilities/fakedb";
const Shop = () => {
  const [producrts, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = producrts.find((producrt) => producrt.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [producrts]);

  //   handle click add to cart button
  const handleProductClick = (selectedProduct) => {
    // console.log(product);
    let newCart = [];
    const exists = cart.find((producrt) => producrt.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(producrt => producrt.id  !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists]
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  return (
    <section>
      <div className="grid md:grid-cols-6 max-w-7xl mx-auto mt-10">
        <div className="col-span-4 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {producrts.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleProductClick={handleProductClick}
            />
          ))}
        </div>

        {/* this is order section */}
        <div className="md:col-span-2 ">
          <Cart cart={cart} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
