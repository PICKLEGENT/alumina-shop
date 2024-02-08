import { Heading, ProductButton } from '../components'

const Catalog = () => {
    return (
        <>
            <section className='mx-480 my-50 text-center text-red-100'>
                <Heading title={'каталог'} />
            </section>
            <div className='catalog__grid'>
                <ProductButton title={'Алюминиевые композитные панели'} />
            </div>
        </>
    )
}

export default Catalog