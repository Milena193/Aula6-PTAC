import { useState, useEffect } from "react";
import { eventBus } from "./eventBus";

export default function TextoTema() {
  const [tema, setTema] = useState("claro");

  useEffect(() => {
    const cancelar = eventBus.subscribe(
      "tema-mudado",
      (novoTema) => {
        setTema(novoTema);
      }
    );

    return cancelar;
  }, []);

  return (
    <div
      style={{
        color: tema === "escuro" ? "white" : "black",
        backgroundColor: tema === "escuro" ? "black" : "white",
        padding: "20px",
      }}
    >
      <h2>Texto do componente</h2>
      <p>Tema atual: {tema}</p>
    </div>
  );
}