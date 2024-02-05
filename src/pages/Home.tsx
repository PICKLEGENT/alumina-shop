import { CustomButton, Heading, InputField } from "../components"
import Banner from 'D:/My projects/alumina-shop/src/assets/images/banner1.jpg'

const Home = () => {
    return (
        <>
            <section className="banner flex flex-col justify-center my-50 h-800 bg-center bg-cover bg-no-repeat text-center font-semibold text-white-100 uppercase"
                style={{ backgroundImage: `url(${Banner})` }}>
                <p className="text-6xl z-10 tracking-widest">alumina:</p>
                <p className="text-7xl z-10 my-50 tracking-widest">качественный товар</p>
                <p className="text-5xl z-10 tracking-widest">по доступным ценам</p>
            </section>
            <section className="mx-450 my-150 text-center text-red-100">
                <Heading title={'история компании'} />
                <h2 className="text-xl mt-50 mb-25">Миссия и ценности</h2>
                <p className="text-lg leading-relaxed">Интернет-магазин «Alumina» заботится о своих покупателях. С самого первого дня у нас работают приветливые специалисты, готовые ответить на Ваши вопросы и найти товар, который Вас интересует. Вас порадуют высокие стандарты качества и широкий ассортимент продукции.</p>
            </section>
            <div className="flex justify-center items-center">
                <form action="#" className="flex flex-col justify-center items-center">
                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <InputField
                                type={'text'}
                                name={'user_name'}
                                autocomplete={'given-name'}
                                placeholder={'Ваше имя'}
                            />
                            <InputField
                                type={'text'}
                                name={'user_email'}
                                autocomplete={'email'}
                                placeholder={'Ваш email'}
                            />
                            <InputField
                                type={'tel'}
                                name={'user_tel'}
                                autocomplete={'on'}
                                placeholder={'Ваш телефон'}
                            />
                        </div>
                        <div className="ml-25 w-400 h-[210px]">
                            <textarea className="w-full h-full p-2.5 whitespace-normal resize-none text-base tracking-wider border-b border-red-100 placeholder:text-red-100 focus:border-black"
                                name="user_message"
                                id="form__home_textarea"
                                placeholder="Ваши пожелания"
                                cols={30}
                                rows={10}>
                            </textarea>
                        </div>
                    </div>
                    <CustomButton title={'отправить'} />
                </form>
            </div>
        </>
    )
}

export default Home