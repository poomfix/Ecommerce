import React from 'react'
import BeverageCard from './components/BeverageCard'
import beverageList from './data/data'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-yellow-100 via-yellow-50 to-orange-100'>
      <Header />
      <br /><br />
      <main className='flex-grow flex justify-center'>
        <div className='max-w-6xl mx-auto px-4 py-16'>
          <h2 className='text-4xl font-bold text-center text-amber-900 mb-16'>🍜 เมนูอาหารของเรา</h2>
          <br />
          <br />
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center'>
            {beverageList.map((p) => (
              <BeverageCard 
                key={p.id}
                image={p.image} 
                name={p.name} 
                description={p.description} 
                price={p.price} 
                butthon={p.butthon} 
              />
            ))}
          </div>
        </div>
      </main>
      <br /><br />
      <Footer />
    </div>
  )
}

export default App