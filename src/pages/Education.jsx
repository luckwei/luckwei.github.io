import { v4 as uuidv4 } from "uuid";
import EducationCard from "../components/EducationCard";
import educationData from "../data/education";

export default () => {
  const cards = educationData.map((item) => (
    <EducationCard key={uuidv4()} {...item} />
  ));
  return <main className="education">{cards}</main>;
};
