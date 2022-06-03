import React, { useEffect,useState } from 'react';

export const SomeState = (props) =>{
    const [state,setState] = useState(props)
    const {name, price} = state

    useEffect(()=> {
        console.log('This is like componentDidMount or componentDidUpdate')
    }, )

    useEffect(()=> {
        console.log('This is like componentDidMount')
    }, [])
    
    useEffect(()=> {
        console.log('This is callback is for name only')
    }, [name])

    const renderPeriod =() =>{
        console.log('renderPeriod renders period.')
        return '。'
    }

    return (
        <>
            <p>現在の{name}は、{price}円です{renderPeriod()}</p>
            <button onClick={()=>setState({ ...state ,price: price+1})}>+1</button>
            <button onClick={()=>setState({ ...state ,price: price-1})}>-1</button>
            <input value={state.name} onChange={e=>setState({...state, name: e.target.value})} />
            <button onClick={()=> setState(props)}>reset</button>
        </>
    )
}