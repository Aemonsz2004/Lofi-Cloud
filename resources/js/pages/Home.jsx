import Layout from '@/layouts/Layout'
import React from 'react'
import MusicBox from '../components/MusicBox'

import friendImage from '../../../public/friend4.png'


const Home = ({isFriendSidebarOpen}) => {




    return (
        <Layout>

        <div className='flex'>
            <div className='flex flex-col border border-gray-700 border-opacity-25 px-5 py-2 rounded-xl w-full min-h-screen mr-2'>
                <div className='flex justify-between w-full mb-3 items-center'>
                    <ul className='flex gap-3 mb-5'>
                        <li className='px-4 py-2 hover:bg-white hover:text-black rounded-xl'>All</li>
                        <li className='px-4 py-2 hover:bg-white hover:text-black rounded-xl'>Music</li>
                        <li className='px-4 py-2 hover:bg-white hover:text-black rounded-xl'>Podcast</li>
                        <li className='px-4 py-2 hover:bg-white hover:text-black rounded-xl'>AudioBooks</li>
                    </ul>

                    <button aria-label='filter' title='label'>
                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.416 2.38098H3.41602C2.31145 2.38098 1.41602 3.27641 1.41602 4.38098V4.38098C1.41602 5.48555 2.31145 6.38098 3.41602 6.38098H10.416" stroke="#898989" strokeWidth="2" strokeLinecap="round"/>
                            <rect x="14.1852" y="1.38098" width="6.23077" height="6.23077" rx="3.11538" stroke="#898989" strokeWidth="2"/>
                            <path d="M11.416 16.6119L18.416 16.6119C19.5206 16.6119 20.416 15.7165 20.416 14.6119V14.6119C20.416 13.5074 19.5206 12.6119 18.416 12.6119L11.416 12.6119" stroke="#898989" strokeWidth="2" strokeLinecap="round"/>
                            <rect x="7.64679" y="17.6119" width="6.23077" height="6.23077" rx="3.11538" transform="rotate(-180 7.64679 17.6119)" stroke="#898989" strokeWidth="2"/>
                        </svg>
                    </button>
                </div>

                <div className='flex justify-between w-full mb-3'>
                    <h2 className='text-2xl'>Made For You</h2>
                    <div className='flex gap-3'>
                        <button aria-label='previous' title='previous'>
                            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9608 10.2056L5.64862 10.2056M5.64862 10.2056L11.5419 16.0989M5.64862 10.2056L11.5419 4.31239" stroke="#898989" strokeWidth="2.02054" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button aria-label='next' title='next'>
                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.05945 7.2055H15.3716M15.3716 7.2055L9.47837 1.31226M15.3716 7.2055L9.47837 13.0987" stroke="#898989" strokeWidth="2.02054" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button aria-label='more' title='more'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3.78651" cy="12.4111" r="1.68378" fill="#898989"/>
                                <circle cx="12.2055" cy="12.4111" r="1.68378" fill="#898989"/>
                                <circle cx="20.6243" cy="12.4111" r="1.68378" fill="#898989"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    {/* <MusicBox/> */}
                </div>
            </div>


{/* friend sidebar */}
            <div className='flex flex-col w-full max-w-[360px] border border-gray-700 border-opacity-25 px-5 py-2 rounded-xl'>
                <div className='flex justify-between items-center mb-10'>
                    <h2>Friends Activity</h2>
                    <div className='flex gap-5 items-center'>
                        <button title='add friend'>
                            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.573 7.47023C15.573 9.33009 14.0653 10.8378 12.2055 10.8378C10.3456 10.8378 8.83789 9.33009 8.83789 7.47023C8.83789 5.61037 10.3456 4.10266 12.2055 4.10266C14.0653 4.10266 15.573 5.61037 15.573 7.47023Z" stroke="#898989" stroke-width="2.02054"/>
                                <path d="M8.83797 14.2054L5.2862 16.5733C4.34935 17.1979 3.78662 18.2493 3.78662 19.3753V21.0528C3.78662 21.9208 4.49022 22.6244 5.35815 22.6244H18.0988" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.573 15.0475H18.0987M20.6244 15.0475H18.0987M18.0987 15.0475V12.5219M18.0987 15.0475V17.5732" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6676 4.15393L8.61629 9.20528M3.56494 14.2566L8.61629 9.20528M8.61629 9.20528L3.56494 4.15393M8.61629 9.20528L13.6676 14.2566" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <ul className='flex flex-col gap-8'>
                    <li>
                        <div className='flex gap-3'>
                            <img className='object-cover w-auto h-[40px]' alt='friend-profile-icon' src={friendImage} lazy/>
                            <div className='flex flex-col'>
                                <span >Friend name</span>
                                <div className='flex gap-3 items-center'>
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.41724 12.323V8.23997M5.87149 12.323V1.55859M10.3257 12.323V5.64166" stroke="#1ED760" stroke-width="1.48475" stroke-linecap="round"/>
                                    </svg>
                                    <div className='flex items-center gap-3'>
                                        <span>Goosebumps</span>
                                            <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="1.5" cy="2" r="1.5" fill="#898989"/>
                                            </svg>
                                        <span className='text-gray-400'>Travis Scott</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-3'>
                            <img className='object-cover w-auto h-[40px]' alt='friend-profile-icon' src={friendImage} lazy/>
                            <div className='flex flex-col'>
                                <span >Friend name</span>
                                <div className='flex gap-3 items-center'>
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.41724 12.323V8.23997M5.87149 12.323V1.55859M10.3257 12.323V5.64166" stroke="#1ED760" stroke-width="1.48475" stroke-linecap="round"/>
                                    </svg>
                                    <div className='flex items-center gap-3'>
                                        <span>Goosebumps</span>
                                            <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="1.5" cy="2" r="1.5" fill="#898989"/>
                                            </svg>
                                        <span className='text-gray-400'>Travis Scott</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-3'>
                            <img className='object-cover w-auto h-[40px]' alt='friend-profile-icon' src={friendImage} lazy/>
                            <div className='flex flex-col'>
                                <span >Friend name</span>
                                <div className='flex gap-3 items-center'>
                                    {/* <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.41724 12.323V8.23997M5.87149 12.323V1.55859M10.3257 12.323V5.64166" stroke="#1ED760" stroke-width="1.48475" stroke-linecap="round"/>
                                    </svg> */}
                                    <span className='text-gray-400'>1hr</span>
                                    <div className='flex items-center gap-3'>
                                        <span>Goosebumps</span>
                                            <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="1.5" cy="2" r="1.5" fill="#898989"/>
                                            </svg>
                                        <span className='text-gray-400'>Travis Scott</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>


        </div>
        </Layout>
    )
}

export default Home
