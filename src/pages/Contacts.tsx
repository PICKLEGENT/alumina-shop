import { Link } from "react-router-dom"
import { CustomButton, Heading, InputField } from "../components"
import CustomCheckbox from "../components/CustomCheckbox"

const Contacts = () => {
    return (
        <>
            <section className="flex justify-around items-start mt-50">
                <div className="flex flex-col justify-center items-center text-red-100">
                    <Heading title={'связаться'} />
                    <p className="my-50">Москва, Каширское шоссе, д. 3, к. 2, стр. 9</p>
                    <p className="my-25">example@example.ru</p>
                    <Link to='/'>8 &nbsp;&nbsp;906&nbsp;&nbsp;729 84 64</Link>
                </div>
                <form action="#">
                    <div className="flex">
                        <div>
                            <label htmlFor="f-contact__input-name" className="block text-red-100">Имя</label>
                            <InputField
                                type={'text'}
                                name={'user_name'}
                                autocomplete={'given-name'}
                                placeholder={'Введите свое имя'}
                                id={'f-contact__input-name'}
                                marginY={'mb-25'}
                                width={'w-300'}
                            />
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                            <label htmlFor="f-contact__input-email" className="block text-red-100">Эл. почта</label>
                            <InputField
                                type={'email'}
                                name={'user_email'}
                                autocomplete={'email'}
                                placeholder={'Добавьте эл. почту'}
                                id={'f-contact__input-email'}
                                marginY={'mb-25'}
                                width={'w-300'}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <label htmlFor="f-contact__input-tel" className="block text-red-100">Телефон</label>
                            <InputField
                                type={'tel'}
                                name={'user_tel'}
                                autocomplete={'tel'}
                                placeholder={'Добавьте номер телефона'}
                                id={'f-contact__input-tel'}
                                marginY={'mb-25'}
                                width={'w-300'}
                            />
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                            <label htmlFor="f-contact__input-address" className="block text-red-100">Адрес</label>
                            <InputField
                                type={'text'}
                                name={'user_address'}
                                autocomplete={'street-address'}
                                placeholder={'Добавьте адрес'}
                                id={'f-contact__input-address'}
                                marginY={'mb-25'}
                                width={'w-300'}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="f-contact__input-subject" className="block text-red-100">Тема</label>
                        <InputField
                            type={'text'}
                            name={'user_tel'}
                            autocomplete={'tel'}
                            placeholder={'Укажите тему'}
                            id={'f-contact__input-subject'}
                            marginY={'mb-25'}
                            width={'w-full'}
                        />
                    </div>
                    <div>
                        <label htmlFor="textarea_contact__message" className="block text-red-100">Сообщение</label>
                        <textarea
                            className="w-full h-full p-2.5 whitespace-normal resize-none text-base tracking-wider border-b border-red-100 placeholder:text-red-100 focus:border-black"
                            name="user_message"
                            id="form__support_textarea"
                            cols={20}
                            rows={5}
                            placeholder="Расскажите, чем мы можем Вам помочь..."
                            id='textarea_contact__message'
                        ></textarea>
                    </div>
                    <CustomCheckbox title={'Согласие на обработку персональных данных'} />
                    <CustomButton title={'отправить'} />
                </form>
            </section>
        </>
    )
}

export default Contacts