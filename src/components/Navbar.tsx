import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <Link to='/'>Главная</Link>
            <Link to='/catalog'>Магазин</Link>
            <Link to='/info'>О нас</Link>
            <Link to='/contacts'>Контакты</Link>
            <Link to='/faq'>Вопросы и ответы</Link>
            <Link to='/support'>Поддержка</Link>
        </nav>
    )
}

export default Navbar