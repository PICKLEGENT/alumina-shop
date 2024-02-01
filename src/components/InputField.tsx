import { InputProps } from "../types"

const InputField = ({ type, name, autocomplete, placeholder }: InputProps) => {
    return (
        <input
            type={type}
            name={name}
            autoComplete={autocomplete}
            placeholder={placeholder}
            className="my-3 p-2.5 w-400 h-50 text-base tracking-wider border-b border-red-100 placeholder:text-red-100 focus:border-black" />
    )
}

export default InputField