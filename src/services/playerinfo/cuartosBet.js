import "../../styles/addPlayerForm.css";

function CuartosBet(props) {
  function treatName(name) {
    return name.replace("_", " ");
  }

  return (
    <div>
      <div class="card betBox">
        <div class="card-header">CUARTOS</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {props.cuartosWinner[0] && treatName(props.cuartosWinner[0].team)}
          </li>
          <li class="list-group-item">
            {props.cuartosWinner[1] && treatName(props.cuartosWinner[1].team)}
          </li>
          <li class="list-group-item">
            {props.cuartosWinner[2] && treatName(props.cuartosWinner[2].team)}
          </li>
          <li class="list-group-item">
            {props.cuartosWinner[3] && treatName(props.cuartosWinner[3].team)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CuartosBet;
