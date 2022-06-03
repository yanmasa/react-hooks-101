import React, { useState } from 'react';

export const SomeState = (props) =>{
    const [state,setState] = useState(props)
    const {name, price} = state

    return (
        <>
            <p>現在の{name}は、{price}円です</p>
            <button onClick={()=>setState({ ...state ,price: price+1})}>+1</button>
            <button onClick={()=>setState({ ...state ,price: price-1})}>-1</button>
            <input value={state.name} onChange={e=>setState({...state, name: e.target.value})} />
            <button onClick={()=> setState(props)}>reset</button>
        </>
    )
}