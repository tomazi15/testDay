import React, { FC } from "react";
import Button from "react-bootstrap/Button";

type ButtonTypes = {
  name: string;
  handleModal: () => void;
};

const ButtonComponent: FC<ButtonTypes> = ({ name, handleModal }) => {
  return (
    <div className="ButtonComponent">
      <Button variant="primary" onClick={handleModal}>
        {name}
      </Button>
    </div>
  );
};

export default ButtonComponent;
