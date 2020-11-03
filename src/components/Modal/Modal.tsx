import React, { FC } from "react";

import { ModalOverlay, ModalButton, ModalContainer } from "./style";

type Props = {
  text: string;
  heading: string;
  modalShown: boolean;
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: FC<Props> = ({ text, heading, modalShown, setModalShown }) => {
  return (
    <>
      <ModalOverlay
        onClick={() => {
          setModalShown(false);
        }}
        visible={modalShown}
      >
        <ModalContainer>
          <h2>{heading}</h2>
          <p>{text}</p>
          <ModalButton
            onClick={() => {
              setModalShown(false);
            }}
          >
            Close
          </ModalButton>
        </ModalContainer>
      </ModalOverlay>
    </>
  );
};

export default Modal;
