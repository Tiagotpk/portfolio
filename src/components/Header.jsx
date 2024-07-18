import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6"

export default function Header() {
  const [showMenu, setShowMenu] = useState('md:hidden sm:hidden')
  const menuItens = [
    {
      title: "Home",
      key: "/"
    },
    {
      title: "Projetos",
      key: "/projects"
    },
    {
      title: "Contato",
      key: "/contact"
    },
  ]

  const pathName = window.location.pathname

  return (
    <div className='text-white font-mont fixed top-0 left-0 right-0 z-50'>
      <div className={`flex bg-theme justify-between items-center p-2 shadow-lg ${showMenu == '' && 'md:flex-col sm:flex-col'}`}>
        <div className='flex justify-between w-full items-center'>
          <h1 className='text-2xl font-semibold hover:text-gray-300 ml-2'>
            <Link to="/">
            @tiagotpk
            </Link>
            </h1>

            <FaBars onClick={() => {
            if(showMenu == 'md:hidden sm:hidden'){
              setShowMenu('')
            }else{
              setShowMenu('md:hidden sm:hidden')
            }
          }}
          className='lg:hidden xl:hidden md:flex sm:flex cursor-pointer' />
        </div>

        <div className="flex md:hidden sm:hidden" >
            {menuItens.map((item) => {
              return (
                <li key={item.key} className={`list-none mx-5 p-1 ${item.key == pathName && 'bg-white text-black rounded-md'}`}>
                  <Link to={`${item.key}`}>{item.title}</Link>
                </li>
              )
            })}
        </div>

        <div className={`mt-5 md:flex sm:flex items-start justify-start w-full flex-col lg:hidden xl:hidden ${showMenu}`}>
            {menuItens.map((item) => {
              return (
                <li key={item.key} className={`list-none py-1 ${item.key == pathName && 'bg-white text-black rounded-md px-5'}`}>
                  <Link to={`${item.key}`}>{item.title}</Link>
                </li>
              )
            })}
        </div>


      </div>
    </div>
  )
}