import React from 'react';

interface MusicCardProps {
    musicName: string;
    musicDescription: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ musicName, musicDescription }) => {
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
