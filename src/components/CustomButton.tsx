import { CustomButtonProps } from '../types'

const CustomButton = ({ title }: CustomButtonProps) => {
    return (
        <button className='custom-btn__btn p-15 w-full font-medium text-lg text-white-100 tracking-widest uppercase cursor-pointer bg-red-100'>{title}</button>
    )
}

export default CustomButton