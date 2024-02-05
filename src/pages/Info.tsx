import { Heading } from "../components"
import Banner from 'D:/My projects/alumina-shop/src/assets/images/banner2.jpg'

const Info = () => {
    return (
        <>
            <section className="mx-480 mt-50 mb-100 text-center text-red-100">
                <Heading title={'наша история'} />
                <h2 className="text-xl mt-50 mb-25">Клиенты — прежде всего</h2>
                <p className="text-base leading-relaxed">Интернет-магазин алюминиевых композитных материалов создан, чтобы покупатели могли найти для себя товары самого высокого качества и получить необходимую информацию.</p>
                <p className="mt-25 text-base leading-relaxed">У нас работают приветливые специалисты, готовые ответить на любые вопросы и найти нужный Вам товар. Вас порадуют высокие стандарты качества и широкий ассортимент продукции. Для магазина «Alumina» интересы клиентов превыше всего.</p>
            </section>
            <section className="banner flex flex-col justify-center my-50 h-800 bg-center bg-cover bg-no-repeat text-center font-semibold text-white-100 uppercase"
                style={{ backgroundImage: `url(${Banner})` }}></section>
        </>
    )
}

export default Info