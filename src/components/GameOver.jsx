import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../../img/img4.png";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <br/>
      <h3>ATENÇÃO ⚠️</h3> <br/>
      <h4>
        Os dois últimos cursos escolhidos será a nota composta para AV1.</h4>
        <br/>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;