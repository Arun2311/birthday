import React, { useEffect, useRef } from 'react'

export default function UseREF() {


    const vig = useRef(null)

    useEffect(()=>{
        vig.current.focus()
    },[])
  return (
    <div cl>
        <h1>Arun</h1>
        <input ref={vig}/>
        <input/>
    </div>

  )
}
