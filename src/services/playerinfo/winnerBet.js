import "../../styles/addPlayerForm.css";

function WinnerBet(props) {
  function treatName(name) {
    return name.replace("_", " ");
  }

  return (
    <div>
      <div class="card betBox">
        <div class="card-header">GANADOR</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {props.finalWinner[0] && treatName(props.finalWinner[0].team)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WinnerBet;
