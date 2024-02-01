import { HeadingProps } from "../types"

const Heading = ({ title }: HeadingProps) => {
    return (
        <h1 className="uppercase text-red-100 text-center text-5xl tracking-wider">{title}</h1>
    )
}

export default Heading