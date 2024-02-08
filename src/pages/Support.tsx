import { CustomButton, Heading, InputField } from '../components'
import CustomCheckbox from '../components/CustomCheckbox'

const Support = () => {
    return (
        <>
            <section className='mx-480 mt-50 mb-100 text-center text-red-100'>
                <Heading title={'связаться с поддержкой'} subtitle={'Как Вам помочь?'} />
            </section>
            <div className='flex flex-col justify-center items-center'>
                <form action='#'>
                    <div>
                        <InputField
                            type={'text'}
                            name={'user_name'}
                            autocomplete={'given-name'}
                            placeholder={'Имя'}
                            marginY={'my-3'}
                            width={'w-400'}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <InputField
                            type={'text'}
                            name={'user_surname'}
                            autocomplete={'family-name'}
                            placeholder={'Фамилия'}
                            marginY={'my-3'}
                            width={'w-400'}
                        />
                    </div>
                    <div>
                        <InputField
                            type={'email'}
                            name={'user_email'}
                            autocomplete={'email'}
                            placeholder={'Email'}
                            marginY={'my-3'}
                            width={'w-400'}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <InputField
                            type={'tel'}
                            name={'user_tel'}
                            autocomplete={'tel'}
                            placeholder={'Телефон'}
                            marginY={'my-3'}
                            width={'w-400'}
                        />
                    </div>
                    <textarea
                        className='w-full h-full p-2.5 whitespace-normal resize-none text-base tracking-wider border-b border-red-100 placeholder:text-red-100 focus:border-black'
                        name='user_message'
                        id='form__support_textarea'
                        cols={20}
                        rows={5}
                        placeholder='Расскажите, чем мы можем Вам помочь...'></textarea>
                    <CustomCheckbox title={'Согласие на обработку персональных данных'} />
                    <CustomButton title={'отправить'} />
                </form>
            </div>
        </>
    )
}

export default Support