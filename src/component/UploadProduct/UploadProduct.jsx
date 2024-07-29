import { VscError } from 'react-icons/vsc';
import { MdOutlineFileUpload } from 'react-icons/md';
import './UploadProduct.css';
import { toast } from 'react-toastify';
import { UploadProductService } from '../../services/ProductService';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingEvent from '../Loading/LoadingEvent';

const UploadProduct = () => {
	const idUser = useSelector((state) => state.account.data.id);
	const [name, setName] = useState('');
	const [price, setPrice] = useState(-1);
	const [category, setCategory] = useState('');
	const [detail, setDetail] = useState('');
	const [image, setImage] = useState([]);
	const [imagePreview, setImagePreview] = useState([]);
	const [size, setSize] = useState(['XS', 'S', 'M', 'L', 'XL']);
	const [color, setColor] = useState([
		'#ec4899',
		'#a855f7',
		'#22c55e',
		'#3b82f6',
	]);
	const [loading, setLoading] = useState(false);

	const handlerValidateNumber = (e) => {
		setPrice(e.target.value);
		if (e.target.value < 0 || e.target.value === '') {
			setPrice(-1);
			e.target.value = '';
		}
	};

	const handlerRemoveImage = (index) => {
		setImage(image.filter((item, i) => i !== index));
		setImagePreview(imagePreview.filter((item, i) => i !== index));
	};

	const handlerChangeSize = (e) => {
		if (e.target.value === '') return setSize([]);
		let arr = [...size];
		if (arr.includes(e.target.value)) {
			arr = arr.filter((item) => item !== e.target.value);
		} else {
			arr.push(e.target.value);
		}
		setSize(arr);
	};

	const handleSubmit = async () => {
		setLoading(true);
		size.length === 0 && toast.error('Size is required.');
		let formData = new FormData();
		formData.append('name', name);
		formData.append('size', size.join(', '));
		formData.append('price', price);
		formData.append('category', category);
		formData.append('detail', detail);
		formData.append('userID', idUser);
		formData.append('color', color.join(', '));
		for (let i = 0; i < image.length; i++) {
			formData.append('files', image[i]);
		}

		const response = await UploadProductService(formData);
		if (response && response.EC === 0) {
			toast.success(response.EM);
		} else toast.error(response.EM);
		setLoading(false);
	};

	const handlerInputFile = (e) => {
		if (e.target.files.length > 5) {
			toast.error('You can only upload 5 images.');
		} else {
			const files = e.target.files;
			let imagePre = [...imagePreview];
			if (files.length + image.length <= 5) {
				const arr = [...image];
				for (let i = 0; i < files.length; i++) {
					arr.push(files[i]);
					imagePre.push(URL.createObjectURL(files[i]));
				}
				setImage(arr);
				setImagePreview(imagePre);
			} else {
				toast.error(
					'You can only upload 5 images, please remove some images to upload more.'
				);
			}
		}
	};

	return (
		<>
			<LoadingEvent check={loading} />
			<div className='container mx-auto'>
				<div className='max-w-[1170px] mx-auto grid lg:grid-cols-[340px,minmax(auto,_1fr)] gap-[30px] mt-[150px] grid-cols-1'>
					<div className='py-[40px] px-[35px] flex flex-col gap-8 text-[14px] shadow-lg mx-auto '>
						<div>
							<label htmlFor='file' className='h-10 flex gap-4 items-center'>
								<div className='w-10 h-10 bg-[#db4444] rounded-full flex justify-center items-center'>
									<input
										type='file'
										multiple
										className='hidden'
										id='file'
										onChange={(e) => handlerInputFile(e)}
									/>
									<MdOutlineFileUpload className='text-white' />
								</div>
								<p className='text-[16px] font-medium'>Choose file</p>
							</label>
							<p className='pt-8 pb-[14px]'>We are upload image production.</p>
							<p>limited : 5.</p>
						</div>
						<hr className='h-[1px]' />
						<div>
							<ul className='flex flex-wrap gap-4 justify-center items-center'>
								{imagePreview.length > 0 &&
									imagePreview.map((item, index) => {
										return (
											<li
												className='h-32 w-24 rounded-md relative'
												key={`image${index}`}>
												<VscError
													title='remove'
													className='absolute  text-[#db4444] cursor-pointer -top-1 -left-1 rounded-full bg-white scale-125'
													onClick={() => handlerRemoveImage(index)}
												/>
												<img
													src={item}
													alt=''
													className='w-full h-full object-cover rounded-md'
												/>
											</li>
										);
									})}
							</ul>
						</div>
					</div>
					<div className='p-[31px] flex flex-col gap-8 justify-between shadow-lg'>
						<p className='text-[14px] text-[#db4444]'>* Required fields</p>
						<div className='grid md:grid-cols-3 gap-4 grid-cols-1'>
							<label htmlFor='name' className='relative'>
								<input
									type='text'
									id='name'
									onChange={(e) => setName(e.target.value)}
									className='py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm peer w-full'
								/>
								{name === '' ? (
									<span className='focus'>Your Name *</span>
								) : (
									<span className='unFocus'>Your Name *</span>
								)}
							</label>
							<label htmlFor='price' className='relative'>
								<input
									type='number'
									min={0}
									id='price'
									onChange={(e) => handlerValidateNumber(e)}
									className='pl-4 pr-14 py-[13px] border-none bg-[#f5f5f5] rounded-sm peer w-full'
								/>
								<span className='absolute top-1/2 -translate-y-1/2 right-3'>
									VND
								</span>
								{price < 0 ? (
									<span className='focus'>Price *</span>
								) : (
									<span className='unFocus'>Price *</span>
								)}
							</label>
							<label htmlFor='category' className='relative'>
								<input
									type='text'
									id='category'
									onChange={(e) => setCategory(e.target.value)}
									className='py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm peer w-full'
								/>
								{category === '' ? (
									<span className='focus'>Category *</span>
								) : (
									<span className='unFocus'>Category *</span>
								)}
							</label>
						</div>
						<textarea
							placeholder='Detail product *'
							className='w-full h-[200px] min-h-28 max-h-60 py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm'
							onChange={(e) => setDetail(e.target.value)}></textarea>

						<div>
							<div>
								<label htmlFor='size' className='relative flex gap-9'>
									<select
										name='size'
										id='size'
										onChange={(e) => handlerChangeSize(e)}
										className='py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm'>
										<option defaultValue=''>Size *</option>
										<option defaultValue='S'>S</option>
										<option defaultValue='M'>M</option>
										<option valdefaultValueue='L'>L</option>
										<option defaultValue='XL'>XL</option>
									</select>
								</label>
								<input type='checkbox' className='peer hidden' id='size' />
								<div className='hidden peer-checked:block'></div>
							</div>
							<div></div>
						</div>

						<div className='flex justify-end '>
							<button
								className='h-[56px] w-[215px] rounded-md bg-[#db4444] text-white'
								onClick={() => handleSubmit()}>
								Accept
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UploadProduct;
