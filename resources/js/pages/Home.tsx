import React from 'react'


const Home = () => {

const handleClick = () => {
    alert('clicked');
}

    return (
        <div className='flex min-h-screen '>
            <aside className='py-5 px-10 pr-30'>
                    <div className='flex min-w-32'>
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

                <div className='flex flex-col w-full'>
                    <nav className=' flex w-full justify-between content-center'>
                        <div className='flex gap-5 p-2'>
                            <button onClick={handleClick} className='flex px-4 py-2 rounded-md hover:bg-gray-400 items-center cursor-pointer'>
                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                    <path d="M2.10266 10.2266V17.7351C2.10266 18.665 2.85652 19.4188 3.78644 19.4188H7.15401C7.72019 19.4475 8.19496 18.9962 8.19496 18.4293V13.5219C8.19496 12.5962 8.94219 11.8441 9.86785 11.8382L14.6554 11.8072C15.5895 11.8011 16.35 12.5568 16.35 13.4909V18.5122C16.35 19.0129 16.756 19.4188 17.2567 19.4188H20.6243C21.5542 19.4188 22.3081 18.665 22.3081 17.7351V10.2266C22.3081 9.73131 22.09 9.26114 21.7119 8.94122L13.293 1.81752C12.6652 1.28631 11.7455 1.28631 11.1177 1.81752L2.69882 8.94122C2.32072 9.26114 2.10266 9.73131 2.10266 10.2266Z" fill="#E0E0E0" stroke="#E0E0E0" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h3>Home</h3>
                            </button>
                            <button className='flex px-4 py-2 rounded-md hover:bg-gray-400 cursor-pointer items-center'>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2 '>
                                    <path d="M13.0864 24.1759L13.5902 22.3817C14.8157 18.0163 18.2271 14.6049 22.5925 13.3793L24.3867 12.8756L22.5925 12.3719C18.2271 11.1463 14.8157 7.73491 13.5902 3.36957L13.0864 1.5753L12.5827 3.36957C11.3572 7.73491 7.94573 11.1463 3.58039 12.3719L1.78611 12.8756L3.58038 13.3793C7.94572 14.6049 11.3572 18.0163 12.5827 22.3816L13.0864 24.1759Z" stroke="#898989" stroke-width="2"/>
                                </svg>
                                <h3>Discover</h3>
                            </button>
                            <div className='flex items-center'>
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                    <path d="M16.7356 16.1555C18.2732 14.5871 19.2213 12.4385 19.2213 10.0686C19.2213 5.2661 15.3281 1.37292 10.5256 1.37292C5.72316 1.37292 1.82999 5.2661 1.82999 10.0686C1.82999 14.8711 5.72316 18.7642 10.5256 18.7642C12.9582 18.7642 15.1574 17.7654 16.7356 16.1555ZM16.7356 16.1555L21.83 21.3729" stroke="#898989" stroke-width="2.02054" stroke-linecap="round"/>
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    // value={query}
                                    // onChange={(e) => setQuery(e.target.value)}
                                    className="w-full p-2  h-[40px]  rounded-lg focus:border"
                                />
                            </div>
                        </div>
                        <div className='flex gap-5 px-4 py-2 items-center'>
                            <a>
                                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.2303 18.0694H5.17458C3.98493 18.0694 3.33504 16.6819 4.09664 15.768L5.35115 14.2626C5.56652 14.0041 5.67406 13.6772 5.67078 13.3409C5.65014 11.2215 6.02221 3.3363 12.7024 3.3363C19.3826 3.3363 19.7547 11.2215 19.7341 13.3409C19.7308 13.6772 19.8383 14.0041 20.0537 14.2626L21.3082 15.768C22.0698 16.6819 21.4199 18.0694 20.2303 18.0694Z" stroke="#898989" stroke-width="1.6838" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.19458 20.8756C9.19458 20.8756 9.89616 22.9803 12.7025 22.9803C15.5088 22.9803 16.2103 20.8756 16.2103 20.8756" stroke="#898989" stroke-width="1.6838" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                            <a>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0298 1.62158H10.7971C10.5149 1.62158 10.2703 1.71325 10.0634 1.89658C9.85647 2.07991 9.73419 2.30908 9.69657 2.58408L9.35795 5.14158C9.11339 5.23325 8.88313 5.34325 8.66716 5.47158C8.45045 5.59991 8.23862 5.73741 8.03169 5.88408L5.5767 4.89408C5.31333 4.80242 5.04996 4.79325 4.78659 4.86658C4.52322 4.93992 4.31628 5.09575 4.16578 5.33408L2.07763 8.88158C1.92713 9.11992 1.8801 9.37658 1.93654 9.65158C1.99298 9.92658 2.13407 10.1466 2.35981 10.3116L4.47619 11.8791C4.45737 12.0074 4.44797 12.1313 4.44797 12.2509V12.9934C4.44797 13.1122 4.45737 13.2357 4.47619 13.3641L2.35981 14.9316C2.13407 15.0966 1.99298 15.3166 1.93654 15.5916C1.8801 15.8666 1.92713 16.1232 2.07763 16.3616L4.16578 19.9091C4.29747 20.1657 4.49951 20.3263 4.77191 20.3909C5.04507 20.4547 5.31333 20.4407 5.5767 20.3491L8.03169 19.3591C8.23862 19.5057 8.45496 19.6432 8.68071 19.7716C8.90646 19.8999 9.1322 20.0099 9.35795 20.1016L9.69657 22.6591C9.73419 22.9341 9.85647 23.1632 10.0634 23.3466C10.2703 23.5299 10.5149 23.6216 10.7971 23.6216H15.0298C15.312 23.6216 15.5566 23.5299 15.7635 23.3466C15.9704 23.1632 16.0927 22.9341 16.1303 22.6591L16.469 20.1016C16.7135 20.0099 16.9442 19.8999 17.1609 19.7716C17.3768 19.6432 17.5883 19.5057 17.7952 19.3591L20.2502 20.3491C20.5136 20.4407 20.7769 20.4499 21.0403 20.3766C21.3037 20.3032 21.5106 20.1474 21.6611 19.9091L23.7493 16.3616C23.8998 16.1232 23.9468 15.8666 23.8904 15.5916C23.8339 15.3166 23.6928 15.0966 23.4671 14.9316L21.3507 13.3641C21.3695 13.2357 21.3789 13.1122 21.3789 12.9934V12.2509C21.3789 12.1313 21.3601 12.0074 21.3225 11.8791L23.4389 10.3116C23.6646 10.1466 23.8057 9.92658 23.8621 9.65158C23.9186 9.37658 23.8716 9.11992 23.7211 8.88158L21.6329 5.36158C21.4824 5.12325 21.271 4.96265 20.9986 4.87978C20.7254 4.79765 20.4571 4.80242 20.1938 4.89408L17.7952 5.88408C17.5883 5.73741 17.3719 5.59991 17.1462 5.47158C16.9204 5.34325 16.6947 5.23325 16.469 5.14158L16.1303 2.58408C16.0927 2.30908 15.9704 2.07991 15.7635 1.89658C15.5566 1.71325 15.312 1.62158 15.0298 1.62158Z" stroke="#898989" stroke-width="2"/>
                                    <circle cx="3.34783" cy="3.34783" r="3.34783" transform="matrix(1 0 0 -1 9.56561 15.9694)" stroke="#898989" stroke-width="2"/>
                                </svg>
                            </a>
                            <button className='w-10 h-10 rounded-full bg-gray-100'>
                                <img className='text-black object-fit ' alt='profile'></img>
                            </button>
                        </div>
                    </nav>

                    <main>
                        child
                    </main>
                </div>

        </div>
    )
}

export default Home