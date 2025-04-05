import React from 'react'

const Sidebar = () => {
    return (
    <aside className='pt-4 pl-3 w-[350px]  mt-2'>
        <div className='flex min-w-32 px-4 pb-8'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                    <path d="M3.56201 3.35669V20.6435" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.32434 3.35669V20.6435" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.0865 20.6435V3.35669L20.8488 7.34596V20.6435H15.0865Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3>My Library</h3>
        </div>

        <ul className='flex flex-col mr-3 gap-2 mt-5'>
            <li className='flex gap-4 px-4 py-3 items-center hover:bg-gray-700 rounded-xl'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2057_3524)">
                    <path d="M16.9859 3.08982L15.4681 1.57199M16.9859 3.08982L10.2855 9.79021C10.1624 9.91332 10.0016 9.99163 9.82876 10.0126L7.07547 10.3473C6.43087 10.4257 6.15957 11.2121 6.61872 11.6712L10.5473 15.5998M16.9859 3.08982L23.0572 9.16116M24.5751 10.679L23.0572 9.16116M23.0572 9.16116L16.3568 15.8616C16.2337 15.9847 16.1554 16.1455 16.1344 16.3183L15.7997 19.0716C15.7214 19.7162 14.935 19.9875 14.4758 19.5283L10.5473 15.5998M10.5473 15.5998L5.37948 20.7676" stroke="#898989" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_2057_3524" x="0.379517" y="0.572021" width="29.1956" height="29.1956" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_3524"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_3524" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                    Pins
            </li>
            <li className='flex gap-4 px-4 py-3 items-center hover:bg-gray-700 rounded-xl'>
                <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" rx="3" transform="matrix(1 0 0 -1 1.07568 23.7405)" stroke="#898989" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M3.07568 3.74048H19.0757V3.74048C19.0757 2.08362 17.7325 0.740478 16.0757 0.740478H6.07568C4.41883 0.740478 3.07568 2.08362 3.07568 3.74048V3.74048Z" stroke="#898989" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M11.5883 14.6964V9.36548C11.5883 9.0203 11.8681 8.74048 12.2133 8.74048H14.3297M11.5883 14.6964V17.7134C11.5883 18.2682 11.1944 18.7517 10.6397 18.7393C9.67772 18.7179 8.32971 18.3842 8.32971 16.6817C8.32971 14.0346 11.5883 14.6964 11.5883 14.6964Z" stroke="#898989" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Playlists
            </li>
            <li className='flex gap-4 px-4 py-3 items-center hover:bg-gray-700 rounded-xl'>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0693 2.38947L12.2054 4.19541L10.3416 2.38947C8.38724 0.495796 5.25209 0.600352 3.42823 2.62003C1.65847 4.5798 1.41482 7.51521 3.01738 9.61392C3.21432 9.87182 3.40795 10.1188 3.59223 10.3449C4.75867 11.7758 7.30368 14.2748 8.57882 15.6159C9.52091 16.6067 10.3677 17.433 11.0057 18.0349C11.6794 18.6705 12.7194 18.6566 13.3944 18.0224C14.5707 16.917 16.3747 15.1953 17.6453 13.8589C18.9205 12.5178 19.6522 11.7758 20.8186 10.3449C21.0029 10.1188 21.1965 9.87182 21.3935 9.61392C22.996 7.51521 22.7524 4.5798 20.9826 2.62003C19.1588 0.600352 16.0236 0.495794 14.0693 2.38947Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                Like Songs</li>
            <li className='flex gap-4 px-4 py-3 items-center hover:bg-gray-700 rounded-xl'>
                <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.32434 3.63318V19.937C1.32434 20.8804 2.39067 21.4291 3.15834 20.8808L8.095 17.3546C8.90155 16.7785 9.98504 16.7785 10.7916 17.3546L15.7283 20.8808C16.4959 21.4291 17.5623 20.8804 17.5623 19.937V3.63318C17.5623 2.35204 16.5237 1.31348 15.2426 1.31348H3.64404C2.36291 1.31348 1.32434 2.35204 1.32434 3.63318Z" stroke="#898989" stroke-width="2.3197"/>
                </svg>
                Saves
            </li>
            <li className='flex gap-4 px-4 py-3 items-center hover:bg-gray-700 rounded-xl'>
                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.2054" cy="11.8488" r="2.75528" stroke="#898989" stroke-width="2.02054"/>
                    <path d="M11.2052 21.9514C5.62567 21.9514 1.10254 17.4282 1.10254 11.8487C1.10254 6.26911 5.62567 1.74597 11.2052 1.74597C14.1179 1.74597 16.7426 2.97854 18.5864 4.95053" stroke="#898989" stroke-width="2.02054" stroke-linecap="round"/>
                </svg>

                Albums
            </li>
            <li className='flex gap-4 px-4 py-3 items-center hover:bg-gray-700 rounded-xl'>
                <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.8324 17.3838C23.8324 19.0406 22.4893 20.3838 20.8324 20.3838H4.8324C3.17554 20.3838 1.8324 19.0406 1.8324 17.3838V5.18379V4.88379C1.8324 3.22693 3.17554 1.88379 4.8324 1.88379H9.19202C10.2142 1.88379 11.166 2.40424 11.7177 3.26479L12.0625 3.80279C12.6142 4.66333 13.566 5.18379 14.5882 5.18379H20.8324C22.4893 5.18379 23.8324 6.52693 23.8324 8.18379V17.3838Z" stroke="#898989" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                Folders
            </li>
            <li className='flex gap-4 px-4 py-3 items-center hover:bg-gray-700  rounded-xl'>
                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9314 6.2415V12.1709C13.9314 14.627 15.9224 16.618 18.3785 16.618C20.8345 16.618 22.8255 14.627 22.8255 12.1709V11.1827V6.2415C22.8255 3.78545 20.8345 1.79443 18.3785 1.79443C15.9224 1.79443 13.9314 3.78545 13.9314 6.2415Z" stroke="#898989" stroke-width="2.016" stroke-linecap="round"/>
                    <path d="M9.97839 12.6648C9.97839 12.6648 10.9666 20.5707 18.3784 20.5707M18.3784 20.5707C25.7902 20.5707 26.7784 12.6648 26.7784 12.6648M18.3784 20.5707V24.0295" stroke="#898989" stroke-width="2.016" stroke-linecap="round"/>
                    <path d="M1.57837 6.83447H7.45838" stroke="#898989" stroke-width="2.016" stroke-linecap="round"/>
                    <path d="M1.57837 13.5544H5.77838" stroke="#898989" stroke-width="2.016" stroke-linecap="round"/>
                    <path d="M1.57837 20.2744H7.45838" stroke="#898989" stroke-width="2.016" stroke-linecap="round"/>
                </svg>
                Podcasts
            </li>
            <li className='flex gap-4 px-4 py-3 items-center hover:bg-gray-700 rounded-xl'>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3297 21.2056L2.79211 18.823C1.92762 18.5817 1.32971 17.7941 1.32971 16.8966V3.72405C1.32971 2.43649 2.52864 1.48439 3.78274 1.77604L9.78274 3.17139C10.6886 3.38205 11.3297 4.18936 11.3297 5.1194V21.2056ZM11.3297 21.2056L19.8673 18.823C20.7318 18.5817 21.3297 17.7941 21.3297 16.8966V3.78805C21.3297 2.48039 20.0954 1.5245 18.8294 1.85165L14.1297 3.06603" stroke="#898989" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Audiobooks
            </li>
            <li className='flex gap-4 px-4 py-3 items-center hover:bg-gray-700  rounded-xl'>
                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.573 6.75697C15.573 8.61683 14.0653 10.1245 12.2055 10.1245C10.3456 10.1245 8.83789 8.61683 8.83789 6.75697C8.83789 4.89712 10.3456 3.3894 12.2055 3.3894C14.0653 3.3894 15.573 4.89712 15.573 6.75697Z" stroke="#898989" stroke-width="2.02054"/>
                    <path d="M8.83785 13.4922L5.28608 15.86C4.34922 16.4846 3.7865 17.5361 3.7865 18.662V20.3396C3.7865 21.2075 4.4901 21.9111 5.35803 21.9111H12.2054" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.7825 6.75708V14.3341M19.7825 14.3341V18.0971C19.7825 18.8462 19.249 19.4996 18.5002 19.476C17.262 19.437 15.573 18.9929 15.573 16.8598C15.573 13.4922 19.7825 14.3341 19.7825 14.3341Z" stroke="#898989" stroke-width="1.68378" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Artists
            </li>
        </ul>
    </aside>
    )
}

export default Sidebar