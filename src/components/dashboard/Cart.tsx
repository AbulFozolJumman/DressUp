import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="p-4 border rounded shadow">
              <h2>{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
