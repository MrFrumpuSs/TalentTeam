import React from 'react';

const Advantage = ({className, icon, title, description}) => {
    return (
        <div className={['flex', className].join(' ')}>
            <div className='flex flex-col items-center text-center'>
                <div className='bg-yellow-400 rounded-lg w-16 h-16 flex justify-center items-center mb-4'>{icon}</div>
                <h3 className='text-gray-900 font-semibold text-2xl mb-3'>{title}</h3>
                <p className='text-gray-500 font-medium text-base leading-6'>{description}</p>
            </div>
        </div>
    );
}

export default Advantage;
