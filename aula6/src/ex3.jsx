import { useState, useEffect } from "react";
export default function Contador(){
    const[contador, setContador] = useEffect(0);

    useEffect(() => {
        console.log("Contador atualizado para:", contador);
    }, [contador]);
    return(
        <div>
            <h2> Contador: {contador}</h2>
            <button onClick={()=> setContador(contador + 1)}>
                +
            </button>
            <button onClick={() => setContador(contador - 1)}>-</button>
        </div>
    )
}