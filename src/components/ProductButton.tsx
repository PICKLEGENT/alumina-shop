import { Link } from 'react-router-dom'
import { ProductButtonProps } from '../types'

const ProductButton = ({ title }: ProductButtonProps) => {
    return (
        <Link to='/product' className='
            flex 
            justify-center 
            items-center 
            text-center 
            m-25 
            w-300 
            h-150 
            font-medium 
            text-xl 
            tracking-wider
            leading-8
            text-red-100 
            border
            border-red-100'
        >
            <span className='p-4'>{title}</span>
        </Link>
    )
}

export default ProductButton