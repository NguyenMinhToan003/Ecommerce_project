import axios from './setup';
const UploadProductService = async (data) => {
	return await axios.post('/uploadProduct', data);
};
const GetProductService = async (page, limit) => {
	return await axios.get(`/getProduct?page=${page}&limit=${limit}`);
};

export { UploadProductService, GetProductService };
