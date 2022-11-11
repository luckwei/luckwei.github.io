import travelMarker from "../assets/images/travel_marker.svg";
import EducationCSS from "../styles/pages/Education.module.css";

import EducationData from "../data/education";

function EducationCard(props) {
  const { imgSrc, country, name, timeFrom, timeTo, desc } = props.item;
  return (
    // imgSrc country name from to desc
    <div className={EducationCSS.card}>
      <img className={EducationCSS.cardImg} src={imgSrc} />

      <div className={EducationCSS.cardLocation}>
        <img className={EducationCSS.cardIc} src={travelMarker} />
        <h4 className={EducationCSS.cardCountry}>{country}</h4>
      </div>

      <h2 className={EducationCSS.cardTitle}>{name}</h2>
      <h3 className={EducationCSS.cardTime}>
        {timeFrom} - {timeTo}
      </h3>
      <p className={EducationCSS.cardDesc}>{desc}</p>
    </div>
  );
}

export default () => {
  const cards = EducationData.map((item) => (
    <EducationCard key={item.id} item={item} />
  ));
  return <div className={EducationCSS.education}>{cards}</div>;
};
