import '../../styles/addPlayerForm.css';

function Bets(props) {
  return (
    <div>
      <div class="card betBox">
        <div class="card-header">Grupo {props.group}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Holanda</li>
          <li class="list-group-item">Diego</li>
        </ul>
      </div>
    </div>
  );
}

export default Bets;
