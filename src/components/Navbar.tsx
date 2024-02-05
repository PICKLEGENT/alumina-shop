import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center h-60 tracking-widest text-red-100">
            <Link to='/' className="navbar-link relative mx-10">Главная</Link>
            <Link to='/catalog' className="navbar-link relative mx-10">Магазин</Link>
            <Link to='/info' className="navbar-link relative mx-10">О нас</Link>
            <Link to='/contacts' className="navbar-link relative mx-10">Контакты</Link>
            <Link to='/faq' className="navbar-link relative mx-10">Вопросы и ответы</Link>
            <Link to='/support' className="navbar-link relative mx-10">Поддержка</Link>
        </nav>
    )
}

export default Navbar