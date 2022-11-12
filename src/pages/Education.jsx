import EducationCard from "../components/EducationCard"
import {education} from "../styles/pages/Education.module.sass"
import EducationData from "../data/education";
import {v4 as uuidv4} from 'uuid'

export default () => {
  const cards = EducationData.map((item) => (
    <EducationCard key={uuidv4()} item={item} />
  ));
  return <div className={education}>{cards}</div>;
};
