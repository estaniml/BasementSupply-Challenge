import { useState } from 'react'

const SizeTab = () => {

    const [tab, setTab] = useState('s')

  return (
    <div className="flex gap-2">
        <button onClick={ () => setTab('s')} className={ tab === 's' ? "border-2 leading-3 md:leading-5 p-1 px-2 md:px-2 rounded-2xl" : null }>S</button>
        <button onClick={ () => setTab('m')} className={ tab === 'm' ? "border-2 leading-3 md:leading-5 p-1 px-2 md:px-2 rounded-2xl" : null }>M</button>
        <button onClick={ () => setTab('l')} className={ tab === 'l' ? "border-2 leading-3 md:leading-5 p-1 px-2 md:px-2 rounded-2xl" : null }>L</button>
        <button onClick={ () => setTab('xl')} className={ tab === 'xl' ? "border-2 leading-3 md:leading-5 p-1 px-2 md:px-2 rounded-2xl" : null }>XL</button>
    </div>
  )
}

export default SizeTab