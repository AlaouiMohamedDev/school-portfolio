import React from 'react'

function Experience() {
  return (
    <div className='my-5 mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex space-y-2 flex-col'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>ELECTRO ALAOUI MAROC </h1>
            <p className='font-cookie text-xl'>
            Gestion et réalisation des factures
            </p>
            <ul className='list-disc text-sm ml-5'>
                <li>Réalisation des factures et devis</li>
                <li>Conception de logo</li>
                <li> Gestion d’employés (paiement & horaires)</li>
            </ul>
            <p className='text-md text-white font-abril'>
                2017 – 2020 à Casablanca 
            </p>
        </div>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex space-y-2 flex-col'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>Fiduciaire AL IZDIHAR</h1>
            <p className='font-cookie text-xl'>
            Stage PFE de Technicien spécialisé
            </p>
            <ul className='list-disc text-sm ml-5'>
                <li>Organisation des documents comptables</li>
                <li>Saisie des données</li>
            </ul>
            <p className='text-md text-white font-abril'>
                Octobre 2018 à Marrakech
            </p>
        </div>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex space-y-2 flex-col'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>EXCEL MEDIA</h1>
            <p className='font-cookie text-xl'>
                Stage PFE de Technicien spécialisé
            </p>
            <ul className='list-disc text-sm ml-5'>
                <li>Réalisation d’un site web e-commerce</li>
                <li>Conception des bannières et dépliants</li>
            </ul>
            <p className='text-md text-white font-abril'>
                Mai 2021 à Marrakech
            </p>
        </div>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex space-y-2 flex-col'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>INTELLCAP</h1>
            <p className='font-cookie text-xl'>
                 Stage d’été
            </p>
            <ul className='list-disc text-sm ml-5'>
                <li>Réalisation d’une application web</li>
            </ul>
            <p className='text-md text-white font-abril'>
                Juillet 2022 – Septembre 2022 à Marrakech
            </p>
        </div>
    </div>
  )
}

export default Experience