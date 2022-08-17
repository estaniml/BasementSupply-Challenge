import header from '../assets/header.svg'
import asterisk from '../assets/asterisk.png'
import group from '../assets/Group.png'

const Header = () => {
  return (
    <div className="w-full md:py-10 overflow-hidden relative">
        <img src={header} alt='Basement Footer' className="w-full"/>
        <p className=' text-3xl border-y-2 font-bold leading-10 text-center my-10 truncate'>A man can’t have enough base­ment swag   —  A man can’t have enough base­ment swag. A man can’t have enough base­ment swag   —  A man can’t have enough base­ment swag</p>
        <img src={asterisk} alt="Basement asterisk" className="w-12 md:w-24 absolute bottom-14 left-12 md:left-24"/>
        <img src={group} alt="Basement asterisk" className="w-12 md:w-24 absolute bottom-24 md:bottom-28 right-2 md:right-24"/>
    </div>
  )
}

export default Header