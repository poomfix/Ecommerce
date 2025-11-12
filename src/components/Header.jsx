import React from 'react'

const Header = () => {
    return (
        <>
            <header className='bg-gradient-to-r from-amber-100 via-orange-100 to-rose-100 text-amber-900 shadow-lg border-b-4 border-amber-200'>
                <div className='max-w-6xl mx-auto px-4 py-12'>
                    <h1 className='text-5xl font-bold text-center mb-3'>🍽️ React shop</h1>
                    <p className='text-center text-amber-800 text-lg font-medium'>ร้านอาหารสไตล์บ้านอบอุ่น</p>
                </div>
            </header>
        </>
    )
}

export default Header