const Profile = () => {
	return (
		<form className='flex gap-5 flex-col  items-start max-w-[870px] min-w-[630px] px-20 py-10'>
			<h2 className='h2 text-[#db4444]'>Edit Your Profile</h2>
			<div className='space'>
				<div className='flex flex-col'>
					<label for='firstname'>First Name</label>
					<input
						type='text'
						placeholder='First Name'
						name='firstname'
						className='input-set'
					/>
				</div>
				<div>
					<label for='lastname'>Last Name</label>
					<input
						type='text'
						placeholder='Last Name'
						name='lastname'
						className='input-set'
					/>
				</div>
			</div>
			<div className='space'>
				<div className='flex flex-col'>
					<label for='email'>Email</label>
					<input
						type='email'
						placeholder='Email'
						name='email'
						className='input-set'
					/>
				</div>
				<div>
					<label for='address'>Address</label>
					<input
						type='text'
						placeholder='Address'
						name='address'
						className='input-set'
					/>
				</div>
			</div>
			<div className='space'>
				<label for='password'>Password Changes</label>
				<input type='password' placeholder='Current Passwod' name='password' />
				<input type='password' placeholder='New Password' name='password' />
				<input type='password' placeholder='Confirm Password' name='password' />
			</div>
			<div>
				<button>Cancel</button>
				<button>Save Changes</button>
			</div>
		</form>
	);
};
export default Profile;
