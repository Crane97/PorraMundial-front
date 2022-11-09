import "../../styles/addPlayerForm.css";

function OctavosBet(props) {
  function treatName(name) {
    return name.replace("_", " ");
  }

  return (
    <div>
      <div class="card betBox">
        <div class="card-header">OCTAVOS</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {props.octavosWinner[0] && treatName(props.octavosWinner[0].team)}
          </li>
          <li class="list-group-item">
            {props.octavosWinner[1] && treatName(props.octavosWinner[1].team)}
          </li>
          <li class="list-group-item">
            {props.octavosWinner[2] && treatName(props.octavosWinner[2].team)}
          </li>
          <li class="list-group-item">
            {props.octavosWinner[3] && treatName(props.octavosWinner[3].team)}
          </li>
          <li class="list-group-item">
            {props.octavosWinner[4] && treatName(props.octavosWinner[4].team)}
          </li>
          <li class="list-group-item">
            {props.octavosWinner[5] && treatName(props.octavosWinner[5].team)}
          </li>
          <li class="list-group-item">
            {props.octavosWinner[6] && treatName(props.octavosWinner[6].team)}
          </li>
          <li class="list-group-item">
            {props.octavosWinner[7] && treatName(props.octavosWinner[7].team)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OctavosBet;
