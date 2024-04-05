import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import AccountSlice from './AccountSlice';
export default configureStore({
	reducer: {
		cart: CartSlice,
		account: AccountSlice,
	},
});
