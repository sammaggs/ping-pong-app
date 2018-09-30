import initial from './Store';

const reducer = (state, action) => {
  const newPlayer1 = state.player1 + 1;
  const newPlayer2 = state.player2 + 1;
  let servePlayer1 = state.serving;
  let servePlayer2 = state.serving;

  switch (action.type) {
    case "incrementPlayer1":
      if (
        newPlayer1 >= 20 &&
        state.player2 >= 20 &&
        (newPlayer1 + state.player2) % 2 === 0
      ) {
        servePlayer1 = !state.serving;
      } else if ((newPlayer1 + state.player2) % 5 === 0) {
        servePlayer1 = !state.serving;
      }
      return {
        ...state,
        player1: newPlayer1,
        serving: servePlayer1
      };

    case "incrementPlayer2":
      if (
        state.player1 >= 20 &&
        newPlayer2 >= 20 &&
        (state.player1 + newPlayer2) % 2 === 0
      ) {
        servePlayer2 = !state.serving;
      } else if ((state.player1 + newPlayer2) % 5 === 0) {
        servePlayer2 = !state.serving;
      }
      return {
        ...state,
        player2: newPlayer2,
        serving: servePlayer2
      };

    case "reset":
      return initial;
    default:
      return state;
  }
};

export default reducer;
