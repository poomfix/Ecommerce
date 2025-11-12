import React from 'react'

const Header = () => {
    return (
        <>
            <header className='bg-gradient-to-r from-amber-100 via-orange-100 to-rose-100 text-amber-900 shadow-lg border-b-4 border-amber-200 p-5'>
                <div className='container mx-auto px-4 py-5'>
                    <div className='flex items-center jusitfy-between'>
                        <div className='flex-grow  space-x-2 item-center '>
                            <h1 className='text-2xl font-bold mb-3'>🍽️ React shop</h1>
                            <p className='text-amber-800 text-lg font-medium'>ร้านอาหารสไตล์บ้านอบอุ่น</p>
                        </div>
                        <nav >
                            <ul className='flex space-x-6'>
                                <li>
                                    <a href="" className='p-2 px-2 py-4 hover:text-gray-700 transition-colors duration-200'>Home</a>
                                </li>
                                <li>
                                    <a href="" className='hover:text-gray-700 transition-colors duration-200'>About</a>
                                </li>
                                <li>
                                    <a href="" className='hover:text-gray-700 transition-colors duration-200'>Service</a>
                                </li>
                                <li>
                                    <a href="" className='hover:text-gray-700 transition-colors duration-200'>Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header