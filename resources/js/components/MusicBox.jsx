import React from 'react'

import musicImage from '../../../public/image.png'

const MusicBox = () => {
    return (
        <div className='flex rounded-xl px-4 py-5 items-center   bg-[#333842]'>
            <div className='flex items-center  gap-3 w-full justify-between '>

            <div className='flex gap-10'>
                <div className='flex items-center'>
                    <button className=' flex justify-center items-center w-12 h-12 hover:bg-[#1ED760] rounded-full hover:text-black' title='play'>
                        <svg width="13" height="23" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.84015 2.25635V11.7606" stroke="#898989" stroke-width="3.16809" stroke-linecap="round"/>
                            <path d="M8.17651 2.25635V11.7606" stroke="#898989" stroke-width="3.16809" stroke-linecap="round"/>
                        </svg>

                    </button>
                    <button className=' flex justify-center items-center w-12 h-12 hover:bg-[#1ED760] rounded-full hover:text-black'>
                    <svg width="" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.21082 6.44092V15.9452" stroke="#898989" stroke-width="2.37606" stroke-linecap="round"/>
                        <path d="M9.10026 12.4051C8.21694 11.8385 8.21694 10.5476 9.10026 9.98099L15.6855 5.75654C16.644 5.14171 17.9031 5.82993 17.9031 6.96862V15.4175C17.9031 16.5562 16.644 17.2444 15.6855 16.6296L9.10026 12.4051Z" fill="#898989"/>
                    </svg>
                    </button>
                    <button className=' flex justify-center items-center  w-12 h-12 hover:bg-[#1ED760] rounded-full hover:text-black'>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4841 6.44092V15.9452" stroke="#898989" stroke-width="2.37606" stroke-linecap="round"/>
                            <path d="M14.5947 9.98109C15.478 10.5477 15.478 11.8386 14.5947 12.4052L8.00942 16.6297C7.05099 17.2445 5.79184 16.5563 5.79184 15.4176L5.79184 6.96871C5.79184 5.83003 7.05099 5.14181 8.00943 5.75664L14.5947 9.98109Z" fill="#898989"/>
                        </svg>
                    </button>
                    <button className=' flex justify-center items-center  w-12 h-12 hover:bg-[#1ED760] rounded-full hover:text-black'>
                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.99622 8.06491V8.06491C6.48228 8.06491 7.87168 8.8016 8.70554 10.0317L9.49167 11.1913L10.5514 12.7545M22.5381 20.5704H17.9049C16.6627 20.5704 15.47 20.0841 14.582 19.2155L13.7085 18.3611M22.5381 20.5704L19.2526 23.9053M22.5381 20.5704L19.2526 17.2356" stroke="#898989" stroke-width="1.90085" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.99622 22.4799V22.4799C6.48596 22.4799 7.88259 21.7552 8.74032 20.5372L14.5475 12.2906C15.4376 11.0266 16.887 10.2745 18.4329 10.2745H22.538M22.538 10.2745L19.2526 6.9397M22.538 10.2745L19.2526 13.6094" stroke="#898989" stroke-width="1.90085" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button className=' flex justify-center items-center  w-12 h-12 hover:bg-[#1ED760] rounded-full hover:text-black'>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.30904 18.7375H6.93298C5.18329 18.7375 3.76489 17.3191 3.76489 15.5694V9.23328C3.76489 7.48359 5.18329 6.06519 6.93298 6.06519H19.6053C21.355 6.06519 22.7734 7.48359 22.7734 9.23327V15.5694C22.7734 17.3191 21.355 18.7375 19.6053 18.7375H13.2692M13.2692 18.7375L16.4372 15.5694M13.2692 18.7375L16.4372 21.9056" stroke="#898989" stroke-width="1.90085" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                <div className='flex px-3    gap-2 items-center'>
                    <span>2:13</span>
                    <svg width="321" height="4" viewBox="0 0 321 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2.31299L319 2.31302" stroke="#898989" stroke-opacity="0.27" stroke-width="3" stroke-linecap="round"/>
                        <path d="M2 2.31299H144.381" stroke="#E0E0E0" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    <span>6:23</span>
                </div>
                <button className=' flex justify-center items-center  w-12 h-12 hover:bg-[#1ED760] rounded-full hover:text-black' title='speaker'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2057_6365)">
                        <path d="M4.88697 15.7896C1.93878 14.3155 1.93878 10.1083 4.88697 8.63421L13.5307 4.31235C13.9739 4.09072 14.4955 4.41305 14.4955 4.90864L14.4955 19.5152C14.4955 20.0108 13.9739 20.3331 13.5307 20.1115L4.88697 15.7896Z" stroke="#898989" stroke-width="2"/>
                        <path d="M18.829 17.2119C19.6098 16.999 20.3318 16.5265 20.9071 15.8381C21.7108 14.8764 22.1623 13.572 22.1623 12.2119C22.1623 10.8518 21.7108 9.54745 20.9071 8.58572C20.3318 7.89734 19.6098 7.42487 18.829 7.21191" stroke="#898989" stroke-width="1.66667" stroke-linecap="round"/>
                        <path d="M17.9959 11.7057C17.9959 11.525 18.1479 11.3728 18.3148 11.4419C18.4159 11.4838 18.5078 11.5452 18.5852 11.6226C18.6626 11.7 18.724 11.7918 18.7658 11.8929C18.8077 11.994 18.8293 12.1024 18.8293 12.2118C18.8293 12.3213 18.8077 12.4296 18.7658 12.5307C18.724 12.6318 18.6626 12.7237 18.5852 12.8011C18.5078 12.8785 18.4159 12.9399 18.3148 12.9817C18.1479 13.0509 17.9959 12.8987 17.9959 12.7179L17.9959 12.2118L17.9959 11.7057Z" fill="#898989" stroke="#898989" stroke-width="0.833333"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2057_6365">
                        <rect width="23.3333" height="23.3333" fill="white" transform="translate(0.495605 0.54541)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </button>
                </div>
                <div className='flex gap-3'>
                    <img className='aspect-square h-[61px]' src={musicImage}/>
                    <div className='flex flex-col gap-1'>
                        <span className='text-sm'>Get Lucky</span>
                        <span className='text-xs'>Artist Name</span>
                        <span className='text-xs'>Random Shot desicprtio</span>
                    </div>
                </div>

            </div>


        

            <div className='flex gap-5'>
                <button>
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7196 3.06781L11.8558 4.87376L9.99196 3.06781C8.0376 1.17414 4.90245 1.2787 3.07859 3.29837C1.30883 5.25815 1.06518 8.19356 2.66774 10.2923C2.86468 10.5502 3.05831 10.7972 3.24259 11.0232C4.40903 12.4542 6.95404 14.9531 8.22918 16.2942C9.17127 17.285 10.0181 18.1113 10.6561 18.7132C11.3298 19.3488 12.3698 19.335 13.0447 18.7007C14.2211 17.5954 16.025 15.8736 17.2957 14.5372C18.5708 13.1961 19.3026 12.4542 20.469 11.0232C20.6533 10.7972 20.8469 10.5502 21.0438 10.2923C22.6464 8.19356 22.4028 5.25815 20.633 3.29837C18.8091 1.2787 15.674 1.17414 13.7196 3.06781Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button>
                    <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="19.75" height="19.75" rx="2.9625" transform="matrix(1 0 0 -1 1.35492 23.688)" stroke="#898989" stroke-width="1.975" stroke-linejoin="round"/>
                        <path d="M3.32953 3.93799H19.1295V3.93799C19.1295 2.30184 17.8032 0.975488 16.167 0.975488H6.29203C4.65589 0.975488 3.32953 2.30184 3.32953 3.93799V3.93799Z" stroke="#898989" stroke-width="1.48125" stroke-linejoin="round"/>
                        <path d="M7.27991 13.813H11.2299M15.1799 13.813H11.2299M11.2299 13.813V9.86304M11.2299 13.813V17.763" stroke="#898989" stroke-width="1.99528" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button>
                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.40497 2.6499H13.255" stroke="#898989" stroke-width="1.975" stroke-linecap="round"/>
                        <path d="M1.40506 9.56226H9.30506" stroke="#898989" stroke-width="1.975" stroke-linecap="round"/>
                        <path d="M1.40506 16.4749H9.30506" stroke="#898989" stroke-width="1.975" stroke-linecap="round"/>
                        <path d="M19.18 1.66235V10.4845M19.18 10.4845V15.0919C19.18 15.8324 18.6539 16.4735 17.9133 16.4748C16.4504 16.4775 14.2425 16.0472 14.2425 13.4252C14.2425 9.50427 19.18 10.4845 19.18 10.4845Z" stroke="#898989" stroke-width="1.975" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        
                </button>
                <button>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="9.52335" y="3.65991" width="11.7865" height="17.6797" rx="2.94662" stroke="#898989" stroke-width="2.06263"/>
                        <circle cx="15.4166" cy="15.4466" r="2.94662" fill="#898989"/>
                        <circle cx="15.4166" cy="8.08" r="1.47331" fill="#898989"/>
                        <circle cx="5.10347" cy="19.8666" r="1.47331" fill="#898989"/>
                        <path d="M5.84012 14.7099H5.10347C4.28978 14.7099 3.63016 14.0503 3.63016 13.2366V8.08C3.63016 7.26631 4.28978 6.60669 5.10347 6.60669H5.84012" stroke="#898989" stroke-width="2.06263" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </button>
                <button>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.76902" cy="12.7058" r="1.68378" fill="#898989"/>
                        <circle cx="12.188" cy="12.7058" r="1.68378" fill="#898989"/>
                        <circle cx="20.6068" cy="12.7058" r="1.68378" fill="#898989"/>
                    </svg>

                </button>

                <svg width="3" height="39" viewBox="0 0 3 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.78967 1.5L1.78967 37.5" stroke="#898989" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"/>
                </svg>

                <button>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.4696 7.09293C3.4696 5.54305 4.72603 4.28662 6.27591 4.28662H17.5011C19.051 4.28662 20.3074 5.54305 20.3074 7.09293V7.09293C20.3074 8.64281 19.051 9.89923 17.5011 9.89923H6.27591C4.72603 9.89923 3.4696 8.64281 3.4696 7.09293V7.09293Z" stroke="#898989" stroke-width="2.3573"/>
                        <path d="M3.4696 15.512L20.3074 15.512" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.4696 21.1245L20.3074 21.1245" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </button>

            </div>


            </div>
        </div>
    )
}

export default MusicBox