import { v4 as uuidv4 } from "uuid";
import EducationCard from "../components/EducationCard";
import EducationData from "../data/education";
import { main } from "../styles/pages/Education.module.sass";

export default () => {
  const cards = EducationData.map((item) => (
    <EducationCard key={uuidv4()} item={item} />
  ));
  return <main className={main}>{cards}</main>;
};
