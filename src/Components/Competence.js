import React from 'react'

function Competence() {
  return (
    <div className='my-5 mx-10 grid  lg:grid-cols-3 gap-5'>
        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex flex-col space-y-4'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>Langage de Programmation</h1>
            <div className='text-md text-white font-abril w-full grid grid-cols-3 gap-y-3 2xl:gap-y-0  2xl:grid-cols-5'>
                <div className='flex flex-col items-center'>
                    <img src='langage/js.png' className='w-[30px]'/>
                    <span>JavaScript</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='langage/python.png' className='w-[30px]'/>
                    <span>Python</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='langage/php.png' className='w-[30px]'/>
                    <span>Php</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='langage/java.png' className='w-[30px]'/>
                    <span>Java</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='langage/c-sharp.png' className='w-[30px]'/>
                    <span>C-Sharp</span>
                </div>
            </div>
        </div>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex flex-col space-y-4 2xl:col-span-2'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>Frameworks</h1>
            <div className='text-md text-white font-abril w-full grid grid-cols-3 gap-y-3 2xl:gap-y-0 2xl:grid-cols-5'>
                <div className='flex flex-col items-center'>
                    <img src='langage/Laravel.png' className='w-[30px]'/>
                    <span>Laravel</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='langage/react.png' className='w-[30px] bg-white'/>
                    <span>React Js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='langage/next.png' className='w-[30px]'/>
                    <span>Next Js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='langage/spring.png' className='w-[30px]'/>
                    <span>Spring Boot</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='langage/django.png' className='w-[70px]'/>
                    <span>Django</span>
                </div>
            </div>
        </div>

        <div className='bg-main-2 shadow-lg py-3 px-5 rounded-lg justify-between flex flex-col space-y-4'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>Editeur Graphique</h1>
            <div className='text-md text-white font-abril w-full grid 2xl:grid-cols-2 gap-3'>
                <div className='flex flex-col items-center'>
                    <img src='langage/illustrator.png' className='w-[30px]'/>
                    <span>Adobe Illustrator</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src='langage/photoshop.png' className='w-[30px]'/>
                    <span>Adobe Photoshop</span>
                </div>
            </div>
        </div>

        <div className='bg-main-2 text-md text-white font-abril shadow-lg py-3 px-5 rounded-lg justify-between flex flex-col space-y-4'>
            <h1 className='text-main-1 font-semibold text-xl font-display'>Git</h1>
                <div className='flex flex-col items-center'>
                    <img src='langage/github.png' className='w-[30px]'/>
                    <span>GitHub</span>
                </div>


        </div>

    </div>
  )
}

export default Competence