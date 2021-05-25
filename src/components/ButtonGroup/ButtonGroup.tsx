import React, { useState } from "react"
import "./ButtonGroup.scss"

type ButtonProps = {
  buttons: string[],
  selectedButton: Function,
}

const ButtonGroup: React.FunctionComponent<ButtonProps> = ({ buttons, selectedButton }: ButtonProps) => {

  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setClickedId(id);
    selectedButton(e);
  };

  const btnGroupClasses = (label:string, tier:string) => {
    return label === tier ? tier.toLowerCase() : "" 
  }

  const getActiveButton = (i:number) => {
    return i === clickedId ? "active" : ""
  }
  

  return (
    <>
      {buttons.map((buttonLabel:string, i:number) => (
        <button 
          key={i}
          name={buttonLabel}
          onClick={(e) => handleClick(e, i)}
          className={`btn ${btnGroupClasses(buttonLabel, buttonLabel)} ${getActiveButton(i)}`}
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};

export default ButtonGroup