import React from 'react'

function Formation() {
  return (
    <div className='my-5 mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex flex-col'>
            <h1 className='text-main-1 font-semibold'>Ecole Marocaine des Sciences de l’Ingénieur (EMSI Marrakech)</h1>
            <p className='font-cookie text-xl'>
                Etudiant en 4eme année « Ingénierie Informatique et Réseaux »
            </p>
            <p className='text-md text-white font-abril'>
                Octobre 2021 - Présent à Marrakech
            </p>
        </div>
        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex flex-col'>
            <h1 className='text-main-1 font-semibold'>Institut spécialisé de technologie appliquée NTIC</h1>
            <p className='font-cookie text-xl'>
                Technicien spécialisé en développement informatique
            </p>
            <p className='text-md text-white font-abril'>
            2019 - Juillet 2021 à Marrakech
            </p>
        </div>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex flex-col'>
            <h1 className='text-main-1 font-semibold'>Ecole Excel Media Gueliz</h1>
            <p className='font-cookie text-xl'>
            Technicien spécialisé en développement MultiMedia
            </p>
            <p className='text-md text-white font-abril'>
            2019 - Juillet 2021 à Marrakech
            </p>
        </div>
    </div>
  )
}

export default Formation