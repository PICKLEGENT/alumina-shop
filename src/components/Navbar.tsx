import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center">
            <Link to='/' className="mx-10 text-red-100">Главная</Link>
            <Link to='/catalog' className="mx-10 text-red-100">Магазин</Link>
            <Link to='/info' className="mx-10 text-red-100">О нас</Link>
            <Link to='/contacts' className="mx-10 text-red-100">Контакты</Link>
            <Link to='/faq' className="mx-10 text-red-100">Вопросы и ответы</Link>
            <Link to='/support' className="mx-10 text-red-100">Поддержка</Link>
        </nav>
    )
}

export default Navbar