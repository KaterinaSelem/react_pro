import "./styles.css";
import { animalData } from "./data";
import AnimalCard from "../../components/AnimalCard/AnimalCard";

import {v4} from 'uuid';

function Lesson05() {
  // массив компонентов
  // каждую итерацию бцдет возвращать объект с данными определенного животного
  const animalCards = animalData.map((animalData) => {
    return <AnimalCard key={v4()} animalData={animalData} />;
  });

  return (
    <div className="lesson05-container">
      {/* <AnimalCard animalData={animalData[0]} />
      <AnimalCard animalData={animalData[1]} />
      <AnimalCard animalData={animalData[2]} />
      <AnimalCard animalData={animalData[3]} /> */}
      {animalCards}
    </div>
  );
}

export default Lesson05;