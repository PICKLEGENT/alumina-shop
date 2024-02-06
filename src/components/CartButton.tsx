import { Link } from "react-router-dom"
import CartIcon from 'D:/My projects/alumina-shop/src/assets/images/cart-shopping-solid.svg'

const CartButton = () => {
    return (
        <div className="relative w-full h-60">
            <div className="flex absolute justify-center items-center w-60 h-60 border border-red-100 rounded-full right-[15%]">
                <Link to='/cart' className="flex justify-center items-center w-full h-full">
                    <img src={CartIcon} alt="cart" className="w-[45%]" />
                    <p className="absolute top-[-0.3rem] right-0 px-1.5 text-sm text-center text-white-100 rounded-full bg-red-100 select-none">0</p>
                </Link>
            </div>
        </div>
    )
}

export default CartButton