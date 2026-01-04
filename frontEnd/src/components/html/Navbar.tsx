import { useState } from 'react'
import '../css/Navbar.css'
const Navbar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <nav className="flex-mid w-full h-16 bg-[var(--void)] py-2 border border-b-[var(--border-grey)]">
      <div className="w-full md:w-1/2 px-2 md:px-0 flex justify-between bg-inherit items-center  h-full">
        <div className='relative text-white font-semibold text-2xl flex-mid gap-3'>
          <div className='w-2 h-2 bg-[var(--lime)]'></div>
          NEAR</div>
        {!isLoggedIn &&
          <div className="flex gap-1 md:gap-8 h-full">
            <button id='logInButton'
              className="transition-transform duration-200 ease-in relative overflow-hidden h-full px-4 border cursor-pointer rounded-[3px] bg-[var(--lime)]" type="button"
            // onClick={}
            ><span className='relative z-10 break-keep whitespace-nowrap'>Log In</span> </button>
            <button id='signInButton'
              className="transition-transform duration-200 ease-in relative overflow-hidden h-full px-4 border cursor-pointer rounded-[3px] bg-[var(--lime)]" type="button"
            // onClick={}
            ><span className='relative z-10 break-keep whitespace-nowrap'>Sign Up</span></button>
          </div>}
        {isLoggedIn &&
          // will add stuff
          <div></div>
        }
      </div>
    </nav>
  )
}

export default Navbar