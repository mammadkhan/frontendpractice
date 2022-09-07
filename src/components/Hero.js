import Maintext from './Maintext'
import Glass from './Glass'
import{ useMemo } from 'react'



function Hero({menu}) {
  const mainText = useMemo( () => <Maintext />, [] );
  return (
    <main className={menu ? 'heroaf' : 'hero'}>
        {mainText}
        <Glass />
    </main>
  )
}

export default Hero