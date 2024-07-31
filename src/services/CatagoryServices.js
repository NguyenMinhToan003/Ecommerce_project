import axios from './setup';
const getCatagories = async (req, res) => {
	return await axios.get('/getCatagories');
};
const getProductByCatagory = async (id) => {
	return await axios.get(`/getProductByCatagory?id=${id}`);
};

export { getCatagories, getProductByCatagory };
