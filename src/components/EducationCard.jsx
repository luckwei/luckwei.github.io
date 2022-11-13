import travelMarker from "../assets/images/travel_marker.svg"
export default function EducationCard(props) {
  return (
    // imgSrc country name from to desc
    <div className="card">
      <img className="cardImg" src={props.imgSrc} alt="Image of Institution" />

      <div className="cardLocation">
        <img className="cardIc" src={travelMarker} />
        <h4 className="cardCountry">{props.country}</h4>
      </div>

      <h2 className="cardTitle">{props.name}</h2>
      <h3 className="cardTime">
        {props.timeFrom} - {props.timeTo}
      </h3>
      <p className="cardDesc">{props.desc}</p>
    </div>
  );
}
