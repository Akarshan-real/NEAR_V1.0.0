import { useState } from 'react'
import '../../styles/css/Navbar.css'
import { useAuth } from '../../contexts/Auth/useAuth';
import { useDelayedNavigate } from '../../hooks/useDelayedNavigate';

const Navbar = () => {
  const go = useDelayedNavigate();
  const { isLoggedIn } = useAuth();
  const [threeLinesState, setThreeLinesState] = useState(false);

  return (
    <nav className="flex-mid w-full h-16 bg-(--void) py-2 border border-b-(--border-grey)">
      <div className="w-full md:w-1/2 px-2 md:px-0 flex justify-between bg-inherit items-center  h-full">
        <div className='relative text-white font-semibold text-2xl flex-mid gap-3'>
          <div className='w-2 h-2 bg-(--lime)'></div>
          NEAR</div>
        {
          !isLoggedIn &&
          <div className="flex gap-1 md:gap-8 h-full">
            <button id='logInButton'
              className="transition-transform duration-200 ease-in relative overflow-hidden h-full px-4 border cursor-pointer rounded-[3px] bg-(--lime)" type="button"
              onClick={() => go('/login')}
            ><span className='relative z-10 break-keep whitespace-nowrap'>Log In</span></button>
            <button id='signInButton'
              className="transition-transform duration-200 ease-in relative overflow-hidden h-full px-4 border cursor-pointer rounded-[3px] bg-(--lime)" type="button"
              onClick={() => go('/signup')}
            ><span className='relative z-10 break-keep whitespace-nowrap'>Sign Up</span></button>
          </div>
        }
        {
          isLoggedIn &&
          (<div className="flex gap-1 md:gap-8 h-full">
            <button onClick={() => go('/profile')}>Profile</button>
            <button className='relative z-20' type="button" onClick={() => setThreeLinesState(prev => !prev)}>
              <svg className='text-(--lime)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5L20 5" />
                <path d="M4 12L20 12" />
                <path d="M4 19L20 19" />
              </svg>
            </button>
          </div>)
        }
        {isLoggedIn &&
          (<div
            className={`h-screen w-4/5 sm:w-1/2 md:w-2/5 fixed top-0 right-0 bg-(--void)  
          ${threeLinesState ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 ease-in-out`}>
            {/* will add stuff */}
          </div>)
        }
      </div>
    </nav>
  )
}

export default Navbar