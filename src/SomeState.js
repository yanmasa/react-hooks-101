import React, { useState } from 'react';

export const SomeState = (props) =>{
// eslint-disable-next-line
    const [name, setName] = useState(props.name)
    const [price, setPrice] = useState(props.price)

    const resetName = ()=>{
        setName(props.name)
    }

    return (
        <>
            <p>現在の{name}は、{price}円です</p>
            <button onClick={()=>setPrice(price+1)}>+1</button>
            <button onClick={()=>setPrice(price-1)}>-1</button>
            <button onClick={()=>setPrice(props.price)}>reset</button>
            <input value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={resetName}>resetName</button>
        </>
    )
}