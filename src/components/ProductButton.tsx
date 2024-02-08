import { Link } from 'react-router-dom'
import { ProductButtonProps } from '../types'

const ProductButton = ({ title }: ProductButtonProps) => {
    return (
        <Link to='/product' className='product-btn__btn
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
            border-red-100
            hover:bg-red-100
            hover:text-white-100 ease-in duration-200'
        >
            <span className='p-4'>{title}</span>
        </Link>
    )
}

export default ProductButton