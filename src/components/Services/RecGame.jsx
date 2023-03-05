import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../UI/Button';
import { Link } from 'gatsby';

const RecGame = () => {
    return (
        <div className="flex px-20 items-center">
            <StaticImage src="../../images/games/ei.jfif" alt="logo" placeholder="none" className="w-full basis-1/2 rounded-lg mr-5"/>
            <div className="basis-1/2 ml-5">
                <h3 className='text-2xl mb-6 font-semibold text-slate-700 uppercase'>Бизнес игра «Эмоциональный интеллект»</h3>
                <p className='mb-5 text-slate-800'><b>Игровая цель</b> – набрать как можно больше баллов и осознать степень развития собственного эмоционального интеллекта.</p>
                <p className='mb-5 text-slate-800'>Игра основана на подходе Йельского университета к трактовке понятия «Эмоциональный интеллект», которое состоит из 4- х факторов:</p>
                <ul className='mb-8 list-disc list-inside text-gray-700 leading-8 pl-3'>
                    <li>осознание своих эмоций</li>
                    <li>управление своими эмоциями</li>
                    <li>осознание эмоций других людей</li>
                    <li>управление эмоциями других людей.</li>
                </ul>
                <div className="flex items-center">
                    <Button className='mr-5'>Заказать игру</Button>
                    <Link to="/" className='text-slate-800 hover:text-yellow-500 transition'>подробнее</Link>
                </div>
            </div>
        </div>
    );
}

export default RecGame;