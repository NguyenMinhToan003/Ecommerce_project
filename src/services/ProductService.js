import axios from './setup';
const UploadProductService = async (data) => {
	return await axios.post('/uploadProduct', data);
};

export { UploadProductService };
