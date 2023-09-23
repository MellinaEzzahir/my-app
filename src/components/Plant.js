function Plant(props) {
  return (
    <div className="plantBox">
      <img src={props.plant.image} className="plantImage" alt={props.plant.name}/>
      <div>name: {props.plant.name}</div>
      <div>nickname: {props.plant.nickname}</div>
    </div>
    );
}

export default Plant;