import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Game = ({img, title, description, slug}) => {
    return (
        <div className='flex'>
            <div className="">
                <StaticImage/>
            </div>
        </div>
    );
}

export default Game;
