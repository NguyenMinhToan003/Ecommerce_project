import { useEffect, useState } from 'react';
import { VscError } from 'react-icons/vsc';
import { MdOutlineFileUpload } from 'react-icons/md';
import './UploadProduct.css';
import { toast } from 'react-toastify';
const UploadProduct = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(-1);
	const [catagory, setCatagory] = useState('');
	const [detail, setDetail] = useState('');
	const [image, setImage] = useState([]);
	const handlerValidateNumber = (e) => {
		setPrice(e.target.value);
		if (e.target.value < 0 || e.target.value === '') {
			setPrice(-1);
			e.target.value = '';
		}
	};
	const handlerRemoveImage = (index) => {
		const arr = [...image];
		arr.splice(index, 1);
		setImage(arr);
	};
	const handlerInputFile = (e) => {
		if (e.target.files.length > 5) toast.error('You can only upload 5 images.');
		else {
			const files = e.target.files;
			if (files.length + image.length <= 5) {
				const arr = [...image];
				for (let i = 0; i < files.length; i++) {
					arr.push(URL.createObjectURL(files[i]));
				}
				setImage(arr);
			} else {
				toast.error(
					'You can only upload 5 images, please remove some images to upload more.'
				);
			}
		}
	};
	useEffect(() => {
		console.log('>>>> image', image);
	}, [image]);
	return (
		<>
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
								{image.length > 0 &&
									image.map((item, index) => {
										return (
											<li
												className='h-28 w-24 bg-black rounded-md relative'
												key={`image${index}`}>
												<VscError
													className='absolute  text-[#db4444] cursor-pointer -top-1 -left-1 rounded-full bg-white'
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
						<div className='grid grid-cols-3 gap-4 '>
							<label htmlFor='name' className='relative'>
								<input
									type='text'
									id='name'
									onChange={(e) => setName(e.target.value)}
									className='py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm peer '
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
									className='py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm peer'
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
							<label htmlFor='catagory' className='relative'>
								<input
									type='text'
									id='catagory'
									onChange={(e) => setCatagory(e.target.value)}
									className='py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm peer'
								/>
								{catagory === '' ? (
									<span className='focus'>Catagory *</span>
								) : (
									<span className='unFocus'>Catagory *</span>
								)}
							</label>
						</div>
						<textarea
							placeholder='Detail product *'
							className='w-full h-[200px] min-h-28 max-h-60 py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm'
							onChange={(e) => setDetail(e.target.value)}></textarea>
						<div>
							<div>
								<label htmlFor='size' className='text-[14px] text-[#db4444]'>
									You need to list the
									<span className='text-[#2b54ea]'>size</span> the product has
								</label>
								<input type='checkbox' className='peer hidden' id='size' />
								<div className='hidden peer-checked:block'></div>
							</div>
							<div>
								<label className='text-[14px] text-[#db4444]'>
									You need to list the
									<span className='text-[#2b54ea]'>color</span> the product has
								</label>
							</div>
						</div>
						<div className='flex justify-end '>
							<button className='h-[56px] w-[215px] rounded-md bg-[#db4444] text-white '>
								Acept
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UploadProduct;
