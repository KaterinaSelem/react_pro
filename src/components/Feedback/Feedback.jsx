import "./style.css";
import Button from "../Button/Button";
import { useState } from "react";


function Feedback() {
  const [like, setLikes] = useState(0);
  const [dislike, setDisLikes] = useState(0);

  const onLike = () => {
    setLikes((prevValue) => prevValue + 1);
  };

  const onDisLike = () => {
    setDisLikes((prevValue) => prevValue + 1);
  };

  const onReset = () => {
    setLikes(0);
    setDisLikes(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="button-control">
        <Button onButtonClick={onLike} name="Like" />
        </div>
        <p>{like}</p>
      
      <div className="button-control">
        <Button onButtonClick={onDisLike} name="Dislike" />
        </div>
        <p>{dislike}</p>
      
      <div className="button-control">
        <Button onButtonClick={onReset} name="Reset Results" />
      </div>
    </div>
  );
}

export default Feedback;