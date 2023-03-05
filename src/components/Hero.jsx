import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
import Wave from '../images/bg-wave1.svg'
import Button from './UI/Button';

const Hero = () => {
    return (
        <>
            <section className='pt-28 pb-16 bg-gray-50 relative'>
                <div className="container px-8 mx-auto items-center flex justify-between">
                    <div className="flex flex-col max-w-3xl">
                        <p className='text-4xl font-semibold mb-5 text-slate-800'>ЛИДЕР РЫНКА ПО РАЗРАБОТКЕ КОРПОРАТИВНЫХ МЕРОПРИЯТИЙ и БИЗНЕС-ГЕЙМИФИКАЦИЙ.</p>
                        <p className='text-lg mb-5 text-slate-700'>Мы специализируемся на разработке и проведении деловых игр, тренингов, бизнес-симуляций, корпоративных мероприятий направленных на:</p>
                        <ul className='pl-2'>
                            <li className="flex items-center text-base"><AiFillCheckCircle className='mr-2 text-green-500'/>оценку</li>
                            <li className="flex items-center text-base"><AiFillCheckCircle className='mr-2 text-green-500'/>обучение</li>
                            <li className="flex items-center text-base"><AiFillCheckCircle className='mr-2 text-green-500'/>развитие</li>
                        </ul>
                        <Button className="max-w-[210px] mt-5">О компании</Button>
                    </div>
                    <div className='max-w-2xl w-full h-96'>
                        <iframe className='w-full h-full rounded-lg' src="https://www.youtube.com/embed/0zMLl9WbHVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
            <img className='w-full' src={Wave} alt="wave" />
        </>
    );
}

export default Hero;
