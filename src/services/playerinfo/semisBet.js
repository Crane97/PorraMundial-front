import "../../styles/addPlayerForm.css";

function SemisBet(props) {
  function treatName(name) {
    return name.replace("_", " ");
  }

  return (
    <div>
      <div class="card betBox">
        <div class="card-header">SEMIFINALES</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {props.semisWinner[0] && treatName(props.semisWinner[0].team)}
          </li>
          <li class="list-group-item">
            {props.semisWinner[1] && treatName(props.semisWinner[1].team)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SemisBet;
