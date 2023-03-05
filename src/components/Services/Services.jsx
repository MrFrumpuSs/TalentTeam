import React, { useState } from 'react';
import RecGame from './RecGame';
import Game from './Game';

const Services = () => {

    const [games, setGames] = useState([
        {slug: 'challenge-accepted', title: 'Вызов Принят', description: 'Цель каждого - первым реализовать проект по увеличению объема продаж в своем регионе в 2 раза с наименьшими финансовыми затратами.', img: '../../images/games/challenge-accepted.jpg'},
    ]);

    return (
        <section className='py-32'>
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-20">
                    <h2 className='text-3xl mb-6 font-semibold text-slate-800 text-center uppercase'>Бизнес-игры</h2>
                    <p className='text-center text-lg max-w-4xl text-slate-700'>Бизнес игры прекрасно моделируют реальный процесс работы в интересной форме. Сотрудник или команда быстрее погружается в курс дела и учится находить решения самостоятельно. Такой способ помогает быстро усвоить большой объем новой информации. Также бизнес- игра является хорошим инструментом для оценки компетенций персонала. процессе игры можно оценить.</p>
                </div>
                <RecGame></RecGame>
                <h2 className='py-20 text-3xl mb-6 font-semibold text-slate-800 text-center uppercase'>Другие игры</h2>
                <Game></Game>
            </div>            
        </section>
    );
}

export default Services;
