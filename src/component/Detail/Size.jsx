const Size = (props) => {
	const count = props.sizeAmount;
	const { sizing } = props;
	console.log('SIZING ', sizing, count);
	return (
		<div className='flex gap-3 items-center justify-start'>
			{count.map((item, index) => {
				return (
					<label htmlFor={item} onClick={() => props.handlerSetSize(item)}>
						<input
							type='radio'
							className='hidden peer'
							id={item}
							name='size'
							defaultChecked={sizing === item ? true : false}
						/>
						<span className='label-radio'>{item}</span>
					</label>
				);
			})}
		</div>
	);
};

export default Size;
