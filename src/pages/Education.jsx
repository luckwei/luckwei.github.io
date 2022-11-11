import EducationCard from "../components/EducationCard"
import {education} from "../styles/pages/Education.module.css"
import EducationData from "../data/education";

export default () => {
  const cards = EducationData.map((item) => (
    <EducationCard key={item.id} item={item} />
  ));
  return <div className={education}>{cards}</div>;
};
