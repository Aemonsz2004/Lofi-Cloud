import React from 'react'

const Sidebar = () => {
    return (
    <aside className='pt-4 px-10 pr-30 mt-2'>
        <div className='flex min-w-32 pb-8'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                    <path d="M3.56201 3.35669V20.6435" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.32434 3.35669V20.6435" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.0865 20.6435V3.35669L20.8488 7.34596V20.6435H15.0865Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3>My Library</h3>
        </div>

        <ul className='flex flex-col gap-5 mt-5'>
            <li>Pins</li>
            <li>Playlists</li>
            <li>Like Songs</li>
            <li>Saves</li>
            <li>Albums</li>
            <li>Folders</li>
            <li>Podcasts</li>
            <li>Audiobooks</li>
            <li>Artists</li>
        </ul>
    </aside>
    )
}

export default Sidebar