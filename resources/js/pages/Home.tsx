import Layout from '@/layouts/Layout'
import React from 'react'


const Home = () => {


    return (
        <Layout >
            <div className='flex flex-col border border-gray-700 border-opacity-25 px-5 py-2 rounded-xl w-full min-h-screen'>
                <div className='flex justify-between w-full mb-3 items-center'>

                    <ul className='flex gap-3 mb-5'>
                        <li className='px-4 py-2 hover:bg-white hover:text-black rounded-xl'>All</li>
                        <li className='px-4 py-2 hover:bg-white hover:text-black rounded-xl'>Music</li>
                        <li className='px-4 py-2 hover:bg-white hover:text-black rounded-xl'>Podcast</li>
                        <li className='px-4 py-2 hover:bg-white hover:text-black rounded-xl'>AudioBooks</li>
                    </ul>

                    <button aria-label='filter' title='label'>
                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.416 2.38098H3.41602C2.31145 2.38098 1.41602 3.27641 1.41602 4.38098V4.38098C1.41602 5.48555 2.31145 6.38098 3.41602 6.38098H10.416" stroke="#898989" stroke-width="2" stroke-linecap="round"/>
                            <rect x="14.1852" y="1.38098" width="6.23077" height="6.23077" rx="3.11538" stroke="#898989" stroke-width="2"/>
                            <path d="M11.416 16.6119L18.416 16.6119C19.5206 16.6119 20.416 15.7165 20.416 14.6119V14.6119C20.416 13.5074 19.5206 12.6119 18.416 12.6119L11.416 12.6119" stroke="#898989" stroke-width="2" stroke-linecap="round"/>
                            <rect x="7.64679" y="17.6119" width="6.23077" height="6.23077" rx="3.11538" transform="rotate(-180 7.64679 17.6119)" stroke="#898989" stroke-width="2"/>
                        </svg>
                    </button>

                </div>

                <div className='flex justify-between w-full mb-3'>
                    <h2 className='text-2xl'>Made For You</h2>
                    <div className='flex gap-3'>
                        <button aria-label='previous' title='previous'>
                            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9608 10.2056L5.64862 10.2056M5.64862 10.2056L11.5419 16.0989M5.64862 10.2056L11.5419 4.31239" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button aria-label='next' title='next'>
                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.05945 7.2055H15.3716M15.3716 7.2055L9.47837 1.31226M15.3716 7.2055L9.47837 13.0987" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
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
                    supposedly the music cards component will be here
                </div>
            </div>

            
        </Layout>
    )
}

export default Home