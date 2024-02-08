import { CustomButton, Heading } from '../components'

const Product = () => {
    return (
        <>
            <section className='mx-480 my-50 text-center text-red-100'>
                <Heading title={'алюминевые композитные панели'} />
            </section>
            <main className='mx-200'>
                <div className='py-25 w-full border-y border-red-100'>
                    <div className='flex justify-between'>
                        <div className='flex justify-center items-center w-250 h-250 bg-red-100'>
                            <p>желтый</p>
                        </div>
                        <div className='flex flex-col justify-between ml-200 w-[70%]'>
                            <div className='flex'>
                                <div className='flex'>
                                    <div>
                                        <p>Артикул:</p>
                                        <p className='my-50'>Толщина панели:</p>
                                        <p>Толщина слоев:</p>
                                    </div>
                                    <div className='mx-50'>
                                        <div>
                                            <p>FJDJFDK</p>
                                            <p className='my-50'>FJDJFDK</p>
                                            <p>FJDJFDK</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex mx-100'>
                                    <div>
                                        <p>Размер панели:</p>
                                        <p className='my-50'>Цвет панели:</p>
                                        <p>Количество:</p>
                                    </div>
                                    <div className='mx-50'>
                                        <p>FJDJFDK</p>
                                        <p className='my-50'>FJDJFDK</p>
                                        <p>FJDJFDK</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex text-xl'>
                                <p>Цена:</p>
                                <p className='mx-25 font-medium text-red-100'>1337 &#8381;</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='my-25 text-lg tracking-wider leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi laudantium quo? Asperiores ipsa a, itaque ea doloremque est illum iure nemo quaerat inventore iusto animi fuga, dicta, incidunt expedita esse officiis quas alias accusamus. Unde minus distinctio atque ea qui. Architecto delectus ipsa modi dolor ex adipisci necessitatibus temporibus.</p>
                <CustomButton title={'добавить'} />
            </main>
        </>
    )
}

export default Product