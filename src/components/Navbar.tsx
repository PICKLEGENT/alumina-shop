import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center h-60 tracking-widest text-red-100">
            <Link to='/' className="mx-10">Главная</Link>
            <Link to='/catalog' className="mx-10">Магазин</Link>
            <Link to='/info' className="mx-10">О нас</Link>
            <Link to='/contacts' className="mx-10">Контакты</Link>
            <Link to='/faq' className="mx-10">Вопросы и ответы</Link>
            <Link to='/support' className="mx-10">Поддержка</Link>
        </nav>
    )
}

export default Navbar