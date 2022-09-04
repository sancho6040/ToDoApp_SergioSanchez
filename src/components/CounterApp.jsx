import PropsTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);

  return (
    <>
        <div>CounterApp 🀄 <span>{counter}</span></div>
        <button onClick={()=>setCounter(counter + 1)}>counter + 1</button>
    </>
  )
}


CounterApp.prototypes = {
    value: PropsTypes.number
}

// no sirve xd
CounterApp.defailtProps = {
    value: 0
}