import { BsTelephone } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
const Contact = () => {
	return (
		<div className='container mx-auto ms:mt-auto mt-56'>
			<div className='max-w-[1170px] mx-auto grid lg:grid-cols-[340px,minmax(auto,_1fr)] gap-[30px] mt-[150px] grid-cols-1'>
				<div className='py-[40px] px-[35px] flex flex-col gap-8 text-[14px] shadow-lg '>
					<div>
						<div className='h-10 flex gap-4 items-center'>
							<div className='w-10 h-10 bg-[#db4444] rounded-full flex justify-center items-center'>
								<BsTelephone className='text-white ' />
							</div>
							<p className='text-[16px] font-medium'>Call To Us</p>
						</div>
						<p className='pt-8 pb-[14px]'>
							We are available 24/7, 7 days a week.
						</p>
						<p>Phone: +8801611112222</p>
					</div>
					<hr className='h-[1px]' />
					<div>
						<div>
							<div className='h-10 flex gap-4 items-center'>
								<div className='w-10 h-10 bg-[#db4444] rounded-full flex justify-center items-center'>
									<CiMail className='text-white ' />
								</div>
								<p className='text-[16px] font-medium'>Write To Us</p>
							</div>
							<p className='mt-8 pb-[14]'>
								Fill out our form and we will contact you within 24 hours.
							</p>
							<p className='my-[14px]'>Emails: customer@exclusive.com</p>
							<p>Emails: support@exclusive.com</p>
						</div>
					</div>
				</div>
				<div className='p-[31px] flex flex-col gap-8 justify-between shadow-lg'>
					<div className='grid grid-cols-3 gap-4'>
						<input
							type='text'
							placeholder='Your Name *'
							className='py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm '
						/>
						<input
							type='text'
							placeholder='Your Email *'
							className='py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm '
						/>
						<input
							type='text'
							placeholder='Your Phone *'
							className='py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm '
						/>
					</div>
					<textarea
						placeholder='Your Message *'
						className='w-full h-[200px] min-h-28 max-h-60 py-[13px] px-4 border-none bg-[#f5f5f5] rounded-sm'></textarea>
					<div className='flex justify-end '>
						<button className='h-[56px] w-[215px] rounded-md bg-[#db4444] text-white '>
							Send Message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
