import { useSelector } from 'react-redux';
const Cart = () => {
	const listCart = useSelector((state) => state.cart.list);
	return (
		<>
			{listCart.map((item, index) => {
				return (
					<div key={index}>
						<h1>{item.name}</h1>
						<p>{item.price}</p>
						<p>{item.size}</p>
						<p>{item.color}</p>
					</div>
				);
			})}{' '}
		</>
	);
};
export default Cart;
