import React, { FC, useState } from "react";
import "./ModalComponent.scss";
import { Modal, Button } from "react-bootstrap";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

type ModalTypes = {
  handleModal: () => void;
};

const ModalComponent: FC<ModalTypes> = ({ handleModal }): JSX.Element => {
  return (
    <>
      <Modal
        className="ModalComponent"
        show
        onHide={handleModal}
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>New Day</Modal.Title>
        </Modal.Header>
        <Modal.Body data-testid="modal-body">
          NewDay is powered by a highly flexible, scalable and multi-product
          digital credit engine. We continue to pursue our ambition to be the
          leading digital consumer finance provider in the UK
        </Modal.Body>
        <Modal.Footer>
          <ButtonComponent name="Close" handleModal={handleModal} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
