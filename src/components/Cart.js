import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let shippingTotal = 0;
  let productQuantity = 0;
  for (const product of cart) {
    productQuantity = productQuantity + product.quantity
    totalPrice = totalPrice + product.price * productQuantity;
    shippingTotal = shippingTotal + product.shipping;
  }
  const totalTax = Number((totalPrice * 0.1).toFixed(2));
  const grandTotal = totalPrice + shippingTotal + totalTax;
  return (
    <div className="md:block hidden mt-6 sticky ml-3 top-0 h-[300px] w-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
      {/*--- icons ---*/}
      <div className="flex justify-center items-center">
        <div className="relative ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-10 w-10 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
            {productQuantity}
          </span>
        </div>
      </div>

      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">${totalPrice}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">${shippingTotal}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Tax</p>
        <p className="text-gray-700">${totalTax}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">${grandTotal}</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        Check out
      </button>
    </div>
  );
};

export default Cart;
