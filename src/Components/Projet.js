import React from 'react'

export default function Projet() {
  return (
    <div className='my-5 mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex space-y-2 flex-col'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>Application web de gestion patients</h1>
            <ul className='list-disc text-sm ml-5'>
                <li>Front end : <span className="font-abril text-white">TailwindCss / ReactJs</span></li>
                <li>Back end : <span className="font-abril text-white">Laravel REST API</span></li>
            </ul>
        </div>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex space-y-2 flex-col'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>Application web E-commerce</h1>
            <ul className='list-disc text-sm ml-5'>
                <li>Front end : <span className="font-abril text-white">TailwindCss / ReactJs</span></li>
                <li>Back end : <span className="font-abril text-white">NextJs</span> </li>
            </ul>
        </div>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex space-y-2 flex-col'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>Application web de gestion des codes Iptv</h1>
            <ul className='list-disc text-sm ml-5'>
                <li>Front end : <span className="font-abril text-white">Css / Html / Bootstrap</span> </li>
                <li>Back end : <span className="font-abril text-white">php</span> </li>
            </ul>
        </div>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex space-y-2 flex-col'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>Application web de gestion d’immobiliers</h1>
            <ul className='list-disc text-sm ml-5'>
                <li> Front end : <span className="font-abril text-white">TailwindCss / NextJs</span></li>
                <li>Back end : <span className="font-abril text-white">NextJs</span> </li>
            </ul>
        </div>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex space-y-2 flex-col'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>Application web de vente des produits terroir</h1>
            <ul className='list-disc text-sm ml-5'>
                <li>Front end : <span className="font-abril text-white">TailwindCss / NextJs</span></li>
                <li>Back end : <span className="font-abril text-white">NextJs / Python</span> </li>
            </ul>
        </div>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex space-y-2 flex-col'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>Application Bureau de gestion d’une salle de sport</h1>
            <ul className='list-disc text-sm ml-5'>
                <li>Front end : <span className="font-abril text-white">JavaFx / Scene Builder</span></li>
                <li>Back end : <span className="font-abril text-white">Java</span> </li>
            </ul>
        </div>

    </div>
  )
}
