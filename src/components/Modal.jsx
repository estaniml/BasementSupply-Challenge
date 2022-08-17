import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { AiOutlineWarning } from 'react-icons/ai'
import MyButton from './MyButton'

const Modal = () => {

    const { setModal, modal } = useContext(DataContext)

  return (
    <div className='z-50 w-screen h-screen bg-black/60 fixed flex justify-center items-center'>
        <div className='m-4 min-h-1/2 rounded-lg bg-white shadow-lg flex flex-col justify-around p-6 md:p-10 text-black gap-10'>
            <div className='flex flex-col justify-center items-center text-2xl text-center text-gray-600'>
                <AiOutlineWarning className='text-9xl'/>
                <p>The app is just for practice.<br/> Thanks for watching!</p>
            </div>
            <div className='flex justify-center items-center'>
                <button 
                    className='bg-black text-white text-xl py-2 px-4 uppercase hover:bg-white hover:outline hover:text-black transition-all ease-linear duration-200'
                    onClick={ () => setModal(false)}
                >Go Back</button>
                
            </div>
        </div>
    </div>
  )
}

export default Modal