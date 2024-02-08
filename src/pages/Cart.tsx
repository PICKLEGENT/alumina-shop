import { CartItem, CustomButton, Heading } from '../components'

const Cart = () => {
    return (
        <>
            <section className='mx-480 my-50 text-center text-red-100'>
                <Heading title={'Корзина'} subtitle={'Ваши заказы'} />
            </section>
            <main className='mx-200'>
                <div className='flex justify-between items-center text-3xl p-15 rounded-xl border border-red-100'>
                    <div className='flex'>
                        <p>Cумма:</p>
                        <p className='mx-25'>50200 &#8381;</p>
                    </div>
                    <div className='flex'>
                        <p>Количество:</p>
                        <p className='mx-25'>2</p>
                    </div>
                    <div className='w-400'>
                        <CustomButton title={'оформить'} />
                    </div>
                </div>
                < CartItem />
            </main>
        </>
    )
}

export default Cart