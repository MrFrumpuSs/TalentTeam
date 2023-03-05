import React from 'react';

const Button = ({className, children}) => {
    return (
        <button className={['bg-yellow-500 rounded-md py-2.5 px-5 text-lg text-white hover:bg-yellow-600 transition delay-50', className].join(' ')}>{children}</button>
    );
}

export default Button;
