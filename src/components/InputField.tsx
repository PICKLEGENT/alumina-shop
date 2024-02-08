import { InputProps } from '../types'

const InputField = ({ type, name, autocomplete, placeholder, id, marginY, width }: InputProps) => {
    return (
        <input
            type={type}
            name={name}
            autoComplete={autocomplete}
            placeholder={placeholder}
            id={id}
            className={`${marginY} p-2.5 ${width} h-50 text-base tracking-wider border-b border-red-100 placeholder:text-red-100 focus:border-black duration-300 ease-in`} />
    )
}

export default InputField