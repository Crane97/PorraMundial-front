import "../../styles/addPlayerForm.css";

function Bets(props) {
  function treatName(name) {
    return name.replace("_", " ");
  }

  return (
    <div>
      <div class="card betBox">
        <div class="card-header">Grupo {props.group}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {props.groupWinners[props.teamA] &&
              treatName(props.groupWinners[props.teamA].team)}
          </li>
          <li class="list-group-item">
            {props.groupWinners[props.teamB] &&
              treatName(props.groupWinners[props.teamB].team)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bets;
