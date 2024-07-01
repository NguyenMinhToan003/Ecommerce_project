import axios from './setup';
const ShippingServices = async (data) => {
	return await axios.post('/shipping', data);
};
export { ShippingServices };
