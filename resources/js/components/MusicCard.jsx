import React from 'react';




const MusicCard = ({ musicName, musicDescription }) => {
    return (
        <div>
            <img className='block' src='' alt='music-icon' />
            <div>
                <h2>{musicName}</h2>
                <h3>{musicDescription}</h3>
            </div>
        </div>
    );
}

export default MusicCard;
