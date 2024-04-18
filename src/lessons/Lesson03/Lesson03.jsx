import "./styles.css";
import Button from "../../components/Button/Button";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { lionData, zebraData, normalizeName } from "./data";

function Lesson03() {
  return (
    <div className="button-container">
      <AnimalCard
        animalData={lionData}
        animalName={normalizeName(lionData.name)}
      >
        <p>Main character.</p>
      </AnimalCard>
      <AnimalCard
        animalData={zebraData}
        animalName={normalizeName(zebraData.name)}
      ></AnimalCard>
      <Button isPrimaryButton />
      <Button buttonName="send data" />
    </div>
  );
}

export default Lesson03;
