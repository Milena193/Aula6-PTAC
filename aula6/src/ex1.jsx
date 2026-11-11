import { useState, useEffect } from "react";
export default function Cronometro(){
    const [segundos, setSegundos] = useState(0);
    const [ativo, setAtivo] = useState(false);

useEffect(()=>{
if(!ativo){
    return;
}

    const intervalo = setInterval(()=>{
        setSegundos((anterior)=>anterior + 1);
    }, 1000);
    return () => clearInterval(intervalo);
}, [ativo]);
return(
    <div>
        <h1>Cronômetro</h1>
        <h2>{segundos}segundos</h2>
        <button onClick={() => setAtivo(true)}>
            Iniciar
        </button>

        <button onClick={()=> setAtivo(false)}>Parar</button>
    </div>
);
}
