import { useState, useEffect } from "react";

export default function AtalhoSalvar() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {

    function aoPressionarTecla(event) {
      if (event.key === "s") {
        setMensagem("Salvando...");

        setTimeout(() => {
          setMensagem("");
        }, 1000);
      }
    }

    window.addEventListener("keydown", aoPressionarTecla);

    return () => {
      window.removeEventListener("keydown", aoPressionarTecla);
    };

  }, []);

  return (
    <div>
      <h2>Atalho de Salvar</h2>

      <p>Pressione a tecla S para salvar.</p>

      <p>{mensagem}</p>
    </div>
  );
}
