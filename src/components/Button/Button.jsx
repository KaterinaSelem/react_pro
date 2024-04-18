import "./styles.css";

function Button({ buttonName = "get data", isPrimaryButton }) {
  console.log();

  const buttonClass = `main-button ${isPrimaryButton ? "primary-button" : "secondary-button"}`;

  return <button className={buttonClass}>{buttonName}</button>;
}

export default Button;
