import { CartButton, Navbar } from "."
import Logo from 'D:/My projects/alumina-shop/src/assets/images/Alumina.svg'

const Header = () => {
    return (
        <header>
            <div className="flex justify-center items-center">
                <img src={Logo} alt="alumina logo" className="w-270" />
            </div>
            <CartButton />
            <Navbar />
        </header>
    )
}

export default Header