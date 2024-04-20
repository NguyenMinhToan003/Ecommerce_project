import './Footer.css';
import IconLatter from '../../assets/icons/IconLetter';
const Footer = () => {
	const Exclusive = ['Subscribe', 'Get 10% off your first order'];
	const Support = [
		'111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
		'exclusive@gmail.com',
		'+88015-88888-9999',
	];
	const Account = [
		'My Account',
		'Login / Register',
		'Cart',
		'Wishlist',
		'Shop',
	];
	const QuickLink = ['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'];
	return (
		<>
			<div className='mt-36 gap-20 px-[135px] pt-20 pb-32 bg-black grid sm:grid-cols-1  xl:grid-cols-4 text-[#d3d3d3] '>
				<ul className='item'>
					<div>Exclusive</div>
					{Exclusive.map((item, index) => {
						return <li key={item}>{item}</li>;
					})}
					<div className='relative'>
						<input
							className='px-3 py-4 border-white border-[1.5px] bg-inherit text-white text-[16px] rounded w-full '
							placeholder='@email.com'
						/>
						<div className='absolute top-1/2 right-[12px] -translate-y-1/2'>
							<IconLatter />
						</div>
					</div>
				</ul>
				<ul className='item'>
					<div className='max-h-[128px]'>Support</div>
					{Support.map((item, index) => {
						return <li key={item}>{item}</li>;
					})}
				</ul>
				<ul className='item'>
					<div>Account</div>
					{Account.map((item, index) => {
						return <li key={item}>{item}</li>;
					})}
				</ul>
				<ul className='item'>
					<div>QuickLink</div>
					{QuickLink.map((item, index) => {
						return <li key={item}>{item}</li>;
					})}
				</ul>
			</div>
		</>
	);
};

export default Footer;
