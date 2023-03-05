import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
    <header className="bg-gray-50">
        <nav className="container mx-auto flex items-center justify-between pt-5">
            <Link to="/"><StaticImage src="../images/logo.svg" alt="logo" placeholder="none" className="w-28"/></Link>
            <ul className='flex'>
                <li className="mr-12"><a href="#">О компании</a></li>
                <li className="mr-12"><a href="#">Услуги</a></li>
                <li className="mr-12"><a href="#">Наша команда</a></li>
                <li className=""><a href="#">Контакты</a></li>
            </ul>
        </nav>
    </header>
)

export default Header
