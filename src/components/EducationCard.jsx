import travelMarker from "../assets/images/travel_marker.svg";
import {
  card,
  cardCountry,
  cardDesc,
  cardIc,
  cardImg,
  cardLocation,
  cardTime,
  cardTitle,
} from "../styles/components/EducationCard.module.sass";

export default function EducationCard(props) {
  const { imgSrc, country, name, timeFrom, timeTo, desc } = props.item;
  return (
    // imgSrc country name from to desc
    <div className={card}>
      <img className={cardImg} src={imgSrc} alt="Image of Institution" />

      <div className={cardLocation}>
        <img className={cardIc} src={travelMarker} />
        <h4 className={cardCountry}>{country}</h4>
      </div>

      <h2 className={cardTitle}>{name}</h2>
      <h3 className={cardTime}>
        {timeFrom} - {timeTo}
      </h3>
      <p className={cardDesc}>{desc}</p>
    </div>
  );
}
