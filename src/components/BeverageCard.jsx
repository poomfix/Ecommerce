import React from 'react'

const BeverageCard = (props) => {
  const { image, name, description, price, butthon } = props;

  return (
    <div className=" beverage-card max-w-sm w-full mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-3 border-amber-100 flex flex-col hover:scale-105 gap-3">
        {/* Image Container */}
        <div className="w-full h-50 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden ">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-amber-300 text-6xl">🍽️</div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-grow flex text-center gap-2">
          <h3 className="card-title text-2xl font-bold text-amber-900 mb-3 line-clamp-2 ">
            {name || 'ชื่ออาหาร'}
          </h3>
          <p className="card-description text-sm text-amber-700 mb-5 flex-grow line-clamp-3">
            {description || 'คำอธิบายอาหาร'}
          </p>
          <div className="flex-grow items-center justify-start mb-4 text-center">
            <span className="card-price text-2xl font-bold text-orange-600">
              {price || '฿0'}
            </span>
          </div>
        </div>

        {/* Button Container */}
        <div className="px-6 pb-6 flex-shrink-0">
          <button className='w-full bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-3 px-4 rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-md'>
            สั่งเลย 🛒
          </button>
        </div>
      </div>
  )
};

export default BeverageCard