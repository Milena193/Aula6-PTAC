import { useState, useEffect } from "react";
export default function BuscarCep(){
    const [cep, setCep] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState("");
    const [endereco, setEndereco] = useState(null);

    async function buscarCep() {
        setCarregando(true);
        setErro("");
        setEndereco(null);
        try{
            const resposta = await fetch(
                `https://viacep.com.br/ws/{cep}/json/`
            );
            const dados = await resposta.json();
            if(!dados.ok){
                throw new Error("CEP não encontrado.");
            }
            setEndereco(dados);
        }
        catch (e) {
            setErro(e.message);
        }
        finally{
            setCarregando(false);
        }
    }
}
return(
    <div>
        <h1>Buscando CEP</h1>

        <input type="text"
        placeholder="Digite seu CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
         />
         <button onClick={buscarCep}>
            Buscar
         </button>
    </div>
);

{carregando && <p>Carregando...</p>}
{erro && <p>{erro}</p>}
{endereco && (
    <div>
        <h2>Endereço encontrado:</h2>
        <p>Logradouro:{endereco.logradouro}</p>
        <p>Bairro: {endereco.localidade}</p>
        <p>Cidade:{endereco.localidade}</p>
        <p>UF{endereco.uf}</p>
    </div>
    
)}