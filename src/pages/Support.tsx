import { CustomButton, Heading, InputField } from "../components"
import CustomCheckbox from "../components/CustomCheckbox"

const Support = () => {
    return (
        <>
            <section className="mx-480 mt-50 mb-100 text-center text-red-100">
                <Heading title={'СВЯЗАТЬСЯ С ПОДДЕРЖКОЙ'} subtitle={'Как Вам помочь?'} />
            </section>
            <div className="flex flex-col justify-center items-center">
                <form action="#">
                    <div>
                        <InputField
                            type={'text'}
                            name={'user_name'}
                            autocomplete={'given-name'}
                            placeholder={'Имя'}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <InputField
                            type={'text'}
                            name={'user_surname'}
                            autocomplete={'family-name'}
                            placeholder={'Фамилия'}
                        />
                    </div>
                    <div>
                        <InputField
                            type={'email'}
                            name={'user_email'}
                            autocomplete={'email'}
                            placeholder={'Email'}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <InputField
                            type={'tel'}
                            name={'user_tel'}
                            autocomplete={'tel'}
                            placeholder={'Телефон'}
                        />
                    </div>
                    <textarea
                        className="w-full h-full p-2.5 whitespace-normal resize-none text-base tracking-wider border-b border-red-100 placeholder:text-red-100 focus:border-black"
                        name="user_message"
                        id="form__support_textarea"
                        cols={20}
                        rows={5}
                        placeholder="Расскажите, чем мы можем Вам помочь..."></textarea>
                    <CustomCheckbox title={'Согласие на обработку персональных данных'} />
                    <CustomButton title={'отправить'} />
                </form>
            </div>
        </>
    )
}

export default Support