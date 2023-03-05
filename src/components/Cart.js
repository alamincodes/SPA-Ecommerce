import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let shippingTotal = 0;
  for (const product of cart) {
    console.log(product);
    totalPrice = totalPrice + product.price;
    shippingTotal = shippingTotal + product.shipping;
  }
  const totalTax = Number((totalPrice * 0.1).toFixed(2));
  const grandTotal = totalPrice + shippingTotal + totalTax;
  return (
    <div className="sticky top-0 shadow-xl p-2">
      <div className="flex border-b-2 p-2 items-center">
        {/*--- text ---*/}
        <h2 className="text-xl font-bold text-center">Order Summary</h2>
        {/*--- icons ---*/}
        <div className="relative scale-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
            {cart.length}
          </span>
        </div>
      </div>
      {/* ---cart info--- */}
      <h3 className="mt-[20px] ml-[23px]">Selected Items: {cart.length}</h3>
      <div className="ml-[23px] mt-4 space-y-3">
        <h3 className="">Total Price: ${totalPrice}</h3>
        <h3 className="">Shipping Charge: ${shippingTotal}</h3>
        <h3 className="">Tax: ${totalTax}</h3>
      </div>
      <hr />
      <h3 className="mt-1 ml-5">Grand Total: ${grandTotal}</h3>
    </div>
  );
};

export default Cart;
