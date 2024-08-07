import axios from './setup';
const UploadProductService = async (data) => {
	return await axios.post('/uploadProduct', data);
};
const GetProductService = async (page, limit) => {
	return await axios.get(`/getProduct?page=${page}&limit=${limit}`);
};
const SearchProductService = async (name, limit, page) => {
	return await axios.get(`/search?name=${name}&limit=${limit}&page=${page}`);
};
const DetailProductService = async (id) => {
	return await axios.get(`/detailProduct?id=${id}`);
};
export {
	UploadProductService,
	GetProductService,
	SearchProductService,
	DetailProductService,
};
