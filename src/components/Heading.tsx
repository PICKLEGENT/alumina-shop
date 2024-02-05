import { HeadingProps } from "../types"

const Heading = ({ title, subtitle }: HeadingProps) => {
    return (
        <>
            <h1 className="uppercase text-red-100 text-center text-5xl tracking-wider">{title}</h1>
            {subtitle ? <h2 className="text-xl mt-50 mb-25">{subtitle}</h2> : null}
        </>
    )
}

export default Heading