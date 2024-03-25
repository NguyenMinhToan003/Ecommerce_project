const Size = (props) => {
	const count = props.sizeAmount;
	return (
		<div className='flex gap-3 items-center justify-start'>
			{count.map((item, index) => {
				return (
					<label htmlFor={item} onClick={() => props.handlerSetSize(item)}>
						<input type='radio' className='hidden peer' id={item} name='size' />
						<span className='peer label-radio'>{item}</span>
					</label>
				);
			})}
		</div>
	);
};

export default Size;
