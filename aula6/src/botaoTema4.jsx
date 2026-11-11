import { eventBus } from "./eventBus";

export default function BotaoTema() {
  return (
    <button
      onClick={() => {
        eventBus.emit("tema-mudado", "escuro");
      }}
    >
      Alternar Tema
    </button>
  );
}