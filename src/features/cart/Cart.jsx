import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "./cartSlice";

function Cart() {
  const username = useSelector((store) => store.user.username);
  const cart = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();

  function handleDeleteCartItem() {
    dispatch(clearItem());
  }

  if (!cart.length) {
    return <EmptyCart />;
  }
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button> 
        <Button type="secondary" onClick={handleDeleteCartItem}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
