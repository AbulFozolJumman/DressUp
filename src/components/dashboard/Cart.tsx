"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow text-left">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b">Item</th>
                <th className="px-6 py-3 border-b">Quantity</th>
                <th className="px-6 py-3 border-b">Price</th>
                <th className="px-6 py-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 flex justify-end">
            <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
