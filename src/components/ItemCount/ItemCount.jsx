import { useState } from "react"

export const ItemCount = ( {stock = 5, initial=1,onAdd }) => {
    const [ count, setCount] =useState(initial)
    const [ booleano, setBooleano] = useState(true)
    const handleCount = () => {
        if(count < stock) {
            setCount(count + 1)
        }        
    }
    const restar = () => {if(count > initial) setCount(count - 1)}        
    const handleOnAdd =() => onAdd(count)
    return (
        <center className="mt-5">
            <button
                className="btn btn-outline-primary"
                onClick={handleCount}
            >
                +
            </button>
            <label htmlFor="">{count}</label>
            <button
                className="btn btn-outline-primary"
                onClick={restar}
            >
                -
            </button>
            <br />
            <button
                className="btn btn-outline-primary"
                onClick={ handleOnAdd}
            >
                agregar al carrito
            </button>
            <br></br>
        </center>
    )
}