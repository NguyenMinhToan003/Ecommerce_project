import axios from './setup';
const ShippingServices = async (data) => {
	return await axios.post('/shipping', data);
};
const OrdersServices = async (limit, page) => {
	return await axios.get(`/getOrders?limit=${limit}&page=${page}`);
};
const OrderDetailServices = async (id) => {
	return await axios.get(`/getOrderDetail?id=${id}`);
};

export { ShippingServices, OrdersServices, OrderDetailServices };
