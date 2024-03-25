import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '../component/Cart/CartSlice';
export default configureStore({
	reducer: {
		Cart: CartSlice,
	},
});
