import { CustomButtonProps } from "../types"

const CustomButton = ({ title }: CustomButtonProps) => {
    return (
        <button className="font-medium text-lg text-white-100 tracking-widest uppercase cursor-pointer w-full p-4 bg-red-100">{title}</button>
    )
}

export default CustomButton