const CartItem = () => {
	return (
		<div className='flex justify-between items-center my-50 p-15 rounded-xl hover:shadow-2xl ease-linear duration-300'>
			<div className='flex justify-center items-center'>
				<div className='flex justify-center items-center w-150 h-150 bg-slate-500'>
					<p>Желтый</p>
				</div>
				<div className='flex flex-col justify-between ml-100 mr-50 h-150 text-right font-medium'>
					<p>Артикул:</p>
					<p>Название:</p>
					<p>Размер:</p>
					<p>Количество:</p>
				</div>
				<div className='flex flex-col justify-between h-150 text-left'>
					<p className='w-fit border-b border-red-100'>JHDHFS131</p>
					<p className='w-fit border-b border-red-100'>Алюминиевая панель</p>
					<p className='w-fit border-b border-red-100'>1950x5455</p>
					<p className='w-fit border-b border-red-100'>15</p>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<p className='mx-100 font-medium text-3xl tracking-widest text-red-100'>
					25100 &#8381;
				</p>
				<button className='w-50 h-50 rounded-xl bg-red-100'></button>
			</div>
		</div>
	);
};

export default CartItem;
