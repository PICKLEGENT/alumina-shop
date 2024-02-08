import { Link } from 'react-router-dom'
import { CartButton, Navbar } from '.'
import Logo from 'D:/My projects/alumina-shop/src/assets/images/Alumina.svg'

const Header = () => {
    return (
        <header className='mt-60'>
            <div className='flex justify-center items-center'>
                <Link to='/'>
                    <img src={Logo} alt='alumina logo' className='w-270' />
                </Link>
            </div>
            <CartButton />
            <Navbar />
        </header>
    )
}

export default Header