import { Heading, ProductItem } from '../components'

const Product = () => {
    return (
        <>
            <section className='mx-480 my-50 text-center text-red-100'>
                <Heading title={'алюминевые композитные панели'} />
            </section>
            <main className='mx-200'>
                <ProductItem />
            </main>
        </>
    )
}

export default Product