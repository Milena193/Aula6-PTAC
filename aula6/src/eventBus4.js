export function criarEventBus() {
  const ouvintes = {};

  return {
    subscribe(evento, callback) {
      if (!ouvintes[evento]) {
        ouvintes[evento] = [];
      }

      ouvintes[evento].push(callback);

      return () => {
        ouvintes[evento] = ouvintes[evento].filter(
          ouvinte => ouvinte !== callback
        );
      };
    },

    emit(evento, dado) {
      (ouvintes[evento] || []).forEach(callback => callback(dado));
    },
  };
}

export const eventBus = criarEventBus();