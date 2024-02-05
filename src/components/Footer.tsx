import { Link } from "react-router-dom"
import { footerLinks } from "../constants"

const Footer = () => {
    return (
        <footer className="mx-200 my-60">
            <div className='flex justify-between'>
                {footerLinks.map((link) => (
                    <div
                        key={link.title}
                        className='footer__link'>
                        <h3 className='mb-5 font-bold tracking-widest'>{link.title}</h3>
                        <div className='flex flex-col gap-4'>
                            {link.links.map((item) => (
                                <Link
                                    key={item.title}
                                    to={item.url}
                                    className='tracking-wider'
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <p className="mt-25 text-center tracking-wider">&#169; Alumina 2023</p>
        </footer>
    )
}

export default Footer