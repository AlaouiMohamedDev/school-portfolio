import React from 'react'

function Home() {
  return (
    <div className='my-5 mx-10 grid md:grid-cols-2 2xl:grid-cols-3 gap-10 bg-main-2 shadow-lg  py-10 px-7'>
            <div className="flex flex-col space-y-3 justify-center 2xl:col-span-2 ">
                <h6 className="lg:text-lg 2xl:text-2xl font-semibold">Bonjour, je suis</h6>
                <h1 className="text-6xl lg:text-4xl 2xl:text-6xl font-black dark:text-white font-display">Alaoui Mohamed</h1>
                
                <p className='text-gray-900  dark:text-gray-400 text-justify leading-loose'>Particulièrement intéressé par l'entrepreneuriat et les affaires, je suis passionné par les nouvelles tendances en matière de technologie, de design et de développement Web. Au cours de mes années universitaires, je me suis concentré sur la construction d'une base de connaissances solide et étendue et sur le travail avec différents types de personnes sur une variété de projets.</p>
            </div>
        <div className='grid grid-cols-2 2xl:h-max gap-y-5 text-sm'>
            <p><span className='text-main-1 font-bold'>Age : </span> 24 Years Old</p>
            <p><span className='text-main-1 font-bold'>Nationalité : </span> Moroccaine</p>
            <p><span className='text-main-1 font-bold'>Téléphone : </span> +212701344384</p>
            <p><span className='text-main-1 font-bold'>E-Mail : </span> sayrosse1@gmail.com</p>
            <a href='https://www.linkedin.com/in/mohamed-alaoui-790145217/'><span className='text-main-1 font-bold'>Linkedin : </span> MOHAMED ALAOUI</a>
            <a href='https://github.com/AlaouiMohamedDev'><span className='text-main-1 font-bold'>GitHub : </span> MOHAMED ALAOUI</a>
            <p><span className='text-main-1 font-bold'>Adresse : </span> Marrakech</p>
            <p><span className='text-main-1 font-bold'>Langues : </span> Anglais,Français</p>
            <a href="ALAOUI CV.pdf" className="relative col-span-2 bg-main-1 text-main-2 items-center py-3 px-6 font-display text-lg flex justify-center">
              <span>Download Cv</span>
            </a>
        </div>
    </div>
  )
}

export default Home