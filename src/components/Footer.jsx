import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900 col-span-full'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h4 className='font-bold text-lg mb-4'>📱 ติดต่อเรา</h4>
            <p className='text-amber-800 text-sm mb-2'>Delish Cafe Restaurant</p>
            <p className='text-amber-800 text-sm'>Tel: 081-234-5678</p>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-4'>🏪 ชั่วโมงการทำงาน</h4>
            <p className='text-amber-800 text-sm'>จันทร์ - อาทิตย์: 10:00 - 22:00</p>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-4'>✨ ข้อมูลเพิ่มเติม</h4>
            <p className='text-amber-800 text-sm'>อาหารสดใหม่ ราคาประหยัด</p>
          </div>
        </div>
        <hr className='border-amber-300 my-6' />
        <div className='text-center text-amber-800 text-sm'>
          <p>&copy; 2025 Delish Cafe. สงวนลิขสิทธิ์</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer