import {useContext} from "react";
import {CartContext} from "../context/CartContext";

export const Cart = () => {

	const {cart, emptyCart} = useContext(CartContext);
	const totalPrice = cart.reduce((total, item) => total + (item.price * item.amount), 0);

	return (
		<div style={{border: '5px solid hotpink', margin: '1em', padding: '1em'}}>
			<h3>Cart</h3>

			<p>Items in cart: {cart.length}</p>
			<p>Total price: {totalPrice}</p>

			<ul>
				{cart.map((item) => (
					<li key={item.id}>{item.name} : {item.amount} x {item.price} = {item.price * item.amount} Kč</li>
				))}
			</ul>

			<button onClick={emptyCart}>Vyprázdnit košík</button>
		</div>
	);
}

export default Cart;