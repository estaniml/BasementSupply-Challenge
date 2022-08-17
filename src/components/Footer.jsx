import MyButton from './MyButton'
import footer from '../assets/footer.svg'

const Footer = () => {
  return (
    <>
      <div className="w-full mx-auto my-4 md:py-10">
          <img src={footer} alt='Basement Footer' className="w-full"/>
      </div>

      <div className='mt-4 flex flex-col md:flex-row  justify-around text-white md:items-end gap-4'>

          <a href='https://github.com/goncy/basement-challenge' className='hover:underline text-xl'  target='_blank'>BASEMENT CHALLENGE</a>


          <div className='gap-4 items-center'>
            <p>Created by: </p>
            <a href='https://github.com/estaniml' className='flex gap-1' target='_blank'>
              <MyButton /> 
            </a>
          </div>

      </div>
    </>
  )
}

export default Footer