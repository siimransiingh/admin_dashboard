import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiNotification3Line } from 'react-icons/ri'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type="button" onClick={customFunc} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon} 
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { curretColor, activeMenu, setactiveMenu, isClicked, setisClicked, handleClick, screenSize, setscreenSize } = useStateContext();

  // setting screen size according to window width
  useEffect(() => {
    const handleResize = () => setscreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize)

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // sidebar visibility in small screen size 
  useEffect(() => {
   if(screenSize <= 900){
    setactiveMenu(false);
   } else {
    setactiveMenu(true);
   }
  }, [screenSize])
  
  return (
    // navbar menue
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu'
        customFunc={() => setactiveMenu((prevactiveMenu) => !prevactiveMenu)}
        color={curretColor} icon={<AiOutlineMenu />} />

      <div className='flex'>
        <NavButton title='Cart'
          customFunc={() => handleClick('cart')}
          color={curretColor}
          icon={<FiShoppingCart />} />

        <NavButton title='Chat'
          dotColor='#03C9D7'
          customFunc={() => handleClick('chat')}
          color={curretColor}
          icon={<BsChatLeft />} />
        <NavButton title='Notifications'
          dotColor='#03C9D7'
          customFunc={() => handleClick('notification')}
          color={curretColor}
          icon={<RiNotification3Line />} />

        <TooltipComponent
          content="Profile" position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userprofile')}>
            <img className='rounded-full w-8 h-8' src={avatar} />
            <p>
              <span className='text-gray-400 text-14'>Hi,</span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Micheal</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userprofile && <UserProfile />}
      </div>
    </div>

  )
}

export default Navbar