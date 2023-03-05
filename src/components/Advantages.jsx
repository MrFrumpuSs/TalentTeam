import React, { useState } from 'react';
import Advantage from './Advantage';
import { AiOutlineFieldTime } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { BsPersonCheck } from "react-icons/bs";
import { FaConnectdevelop } from "react-icons/fa";

const Advantages = () => {

    const [advantages, setAdvantages] = useState([
        {id: 1, icon: <AiOutlineFieldTime size={30} color='#fff'/>, title: 'Опытность', description: 'Более 10 лет опыта'},
        {id: 2, icon: <TbWorld size={28} color='#fff'/>, title: 'Глобальность', description: 'Международная экспертиза'},
        {id: 3, icon: <BsPersonCheck size={28} color='#fff'/>, title: 'Индивидуальность', description: 'Индивидуальный подход к каждому клиенту'},
        {id: 4, icon: <FaConnectdevelop size={28} color='#fff'/>, title: 'Инновации', description: 'Мы не стоим на месте, мы движемся в ногу со временем, используя технологичные решения'}
    ]);

    return (
        <section className='pt-24 container mx-auto px-10'>
            <div className="flex flex-col items-center mb-20">
                <h2 className='text-3xl mb-6 font-semibold text-slate-800 text-center uppercase'>«Играя мы развиваем ваш бизнес»</h2>
                <p className='text-center text-lg max-w-2xl text-slate-700'>Мы помогаем воодушевлять, развивать сотрудников с прицелом на плодотворную командную работу и результата для Бизнеса!</p>
            </div>
            <div className="flex">
                {advantages.map(advantage=>
                    <Advantage className="basis-1/4 mr-5 last:mr-0" key={advantage.id} icon={advantage.icon} title={advantage.title} description={advantage.description}></Advantage>
                )}
            </div>
        </section>
    );
}

export default Advantages;
