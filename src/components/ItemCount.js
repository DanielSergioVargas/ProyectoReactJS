import { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const decrementar = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }

    const incrementar = () => {
        if(stock > count){
            setCount(count + 1);
        }
    }

    const AgregarCantidad = () => {
        onAdd = {count};
    }

    return <div className="contador">
        <button /* disabled={count <= 1} */ onClick={decrementar}>-</button>
        <label>{count}</label>
        <button /* disabled={count >= stock} */ onCLick={incrementar}>+</button>
        <div>
            <button disabled={stock <= 0} onClick={AgregarCantidad}>Agregar al carrito</button>
        </div>
        </div>
} 

export default ItemCount;