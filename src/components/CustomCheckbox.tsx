import { CustomCheckboxProps } from "../types"

const CustomCheckbox = ({ title }: CustomCheckboxProps) => {
    return (
        <div className="my-25 justify-start w-full">
            <input className="accent-red-100 cursor-pointer" type="checkbox" name="user_checkbox" id="f-home__checkbox" />
            <label className="mx-2.5 cursor-pointer" htmlFor="f-home__checkbox">{title}</label>
        </div>
    )
}

export default CustomCheckbox