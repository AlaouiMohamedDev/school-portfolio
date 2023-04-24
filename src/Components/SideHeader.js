import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function SideHeader() {

    const acceuil= () =>{
        const acceuil = document.querySelector('.acceuil')
        const formation = document.querySelector('.formation')
        const competence = document.querySelector('.competence')
        const experience = document.querySelector('.experience')
        const projet = document.querySelector('.projet')
        const certificat = document.querySelector('.certificat')
    
    
        acceuil.classList.add('active')
        formation.classList.remove('active')
        competence.classList.remove('active')
        experience.classList.remove('active')
        projet.classList.remove('active')
        certificat.classList.remove('active')
    
      }

      const formation= () =>{
        const acceuil = document.querySelector('.acceuil')
        const formation = document.querySelector('.formation')
        const competence = document.querySelector('.competence')
        const experience = document.querySelector('.experience')
        const projet = document.querySelector('.projet')
        const certificat = document.querySelector('.certificat')
    
    
        acceuil.classList.remove('active')
        formation.classList.add('active')
        competence.classList.remove('active')
        experience.classList.remove('active')
        projet.classList.remove('active')
        certificat.classList.remove('active')
    
      }

      const competence= () =>{
        const acceuil = document.querySelector('.acceuil')
        const formation = document.querySelector('.formation')
        const competence = document.querySelector('.competence')
        const experience = document.querySelector('.experience')
        const projet = document.querySelector('.projet')
        const certificat = document.querySelector('.certificat')
    
    
        acceuil.classList.remove('active')
        formation.classList.remove('active')
        competence.classList.add('active')
        experience.classList.remove('active')
        projet.classList.remove('active')
        certificat.classList.remove('active')
    
      }

      const experience= () =>{
        const acceuil = document.querySelector('.acceuil')
        const formation = document.querySelector('.formation')
        const competence = document.querySelector('.competence')
        const experience = document.querySelector('.experience')
        const projet = document.querySelector('.projet')
        const certificat = document.querySelector('.certificat')
    
    
        acceuil.classList.remove('active')
        formation.classList.remove('active')
        competence.classList.remove('active')
        experience.classList.add('active')
        projet.classList.remove('active')
        certificat.classList.remove('active')
    
      }

      const projet= () =>{
        const acceuil = document.querySelector('.acceuil')
        const formation = document.querySelector('.formation')
        const competence = document.querySelector('.competence')
        const experience = document.querySelector('.experience')
        const projet = document.querySelector('.projet')
        const certificat = document.querySelector('.certificat')
    
    
        acceuil.classList.remove('active')
        formation.classList.remove('active')
        competence.classList.remove('active')
        experience.classList.remove('active')
        projet.classList.add('active')
        certificat.classList.remove('active')
    
      }

      const certificat= () =>{
        const acceuil = document.querySelector('.acceuil')
        const formation = document.querySelector('.formation')
        const competence = document.querySelector('.competence')
        const experience = document.querySelector('.experience')
        const projet = document.querySelector('.projet')
        const certificat = document.querySelector('.certificat')
    
    
        acceuil.classList.remove('active')
        formation.classList.remove('active')
        competence.classList.remove('active')
        experience.classList.remove('active')
        projet.classList.remove('active')
        certificat.classList.add('active')
    
      }

      const currentRoute = window.location.pathname;

      useEffect(()=>{
        if(currentRoute == '/projet')
        {
          projet()
        }
        else if(currentRoute == '/')
        {
          acceuil()
        }
        else if(currentRoute == '/formation')
        {
          formation()
        }
        else if(currentRoute == '/competence')
        {
          competence()
        }
        else if(currentRoute == '/experience')
        {
          experience()
        }
        else if(currentRoute == '/certificat')
        {
          certificat()
        }
       })
  return (
    <div className='w-full lg:w-1/5 bg-main-1 h-full lg:h-screen flex flex-col items-center space-y-5 py-5 relative '>
        <img src='photo2.png' className='rounded-full w-[140px] h-[140px] 2xl:w-[180px] 2xl:h-[180px] object-cover object-bottom bg-main-4' />
        <h1 className="text-2xl 2xl:text-3xl font-abril text-main-2">Alaoui Mohamed</h1>
        <ul className="w-full grid grid-cols-2 lg:grid-cols-1 py-2 2xl:py-5 text-main-2 text-md 2xl:text-lg font-display uppercase">
            <Link to='/' onClick={acceuil}>
                <li className='acceuil active py-3 px-4 md:px-10 hover:bg-main-2 hover:text-main-1 duration-150 transition-all ease-out flex items-center space-x-2 cursor-pointer'>
                    <i className='bx bx-home-alt-2'></i>
                    <span>Acceuil</span>
                </li>
            </Link>
            <Link to='/formation' onClick={formation}>
                <li className='formation py-3 px-4 md:px-10 hover:bg-main-2 hover:text-main-1 duration-150 transition-all ease-out flex items-center space-x-2 cursor-pointer'>
                    <i className='bx bx-library'></i>
                    <span>FORMATIONS</span>
                </li>
            </Link>
            <Link to='/experience' onClick={experience}>
                <li className='experience py-3 px-4 md:px-10 hover:bg-main-2 hover:text-main-1 duration-150 transition-all ease-out flex items-center space-x-2 cursor-pointer'>
                    <i className='bx bx-hard-hat'></i>
                    <span>EXPERIENCES</span>
                </li>
            </Link>
            <Link to='/competence' onClick={competence}>
                <li className='competence py-3 px-4 md:px-10 hover:bg-main-2 hover:text-main-1 duration-150 transition-all ease-out flex items-center space-x-2 cursor-pointer'>
                    <i className='bx bx-medal'></i>
                    <span>COMPETENCES</span>
                </li>
            </Link>
            <Link to='/certificat' onClick={certificat}>
                <li className='certificat py-3 px-4 md:px-10 hover:bg-main-2 hover:text-main-1 duration-150 transition-all ease-out flex items-center space-x-2 cursor-pointer'>
                    <i className='bx bx-certification' ></i>
                    <span>CERTIFICATS</span>
                </li>
            </Link>
            <Link to='/projet' onClick={projet}>
                <li className='projet py-3 px-4 md:px-10 hover:bg-main-2 hover:text-main-1 duration-150 transition-all ease-out flex items-center space-x-2 cursor-pointer'>
                    <i className='bx bx-briefcase' ></i>
                    <span>PROJETS</span>
                </li>
            </Link>
        </ul>
        <div className='flex items-center space-x-5 lg:absolute bottom-2 2xl:bottom-6 text-main-2 text-xl'>
            <a href='https://www.facebook.com/simo.al.1069'>
                <i class='bx bxl-facebook' ></i>
            </a>
            
            <a href='https://github.com/AlaouiMohamedDev'>
                <i class='bx bxl-github' ></i>
            </a>
            <a href='https://www.linkedin.com/in/mohamed-alaoui-790145217/'>
                 <i class='bx bxl-linkedin' ></i>
            </a>
            <a href='https://www.instagram.com/alaoui.sayrosse/'>
                <i class='bx bxl-instagram' ></i>
            </a>
            
            
            
        </div>
    </div>
  )
}

export default SideHeader