import styled from "styled-components";

type ModalProps = {
  visible: boolean;
};
export const ModalOverlay = styled.div<ModalProps>`
  position: absolute;
  left: 0;
  top: 0;
  display: ${(props) => (props.visible ? "flex" : "none")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
`;
export const ModalContainer = styled.div`
  max-width: 15rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 0.4rem;
  padding: ${(props) => `${props.theme.padding.md} ${props.theme.padding.lg}`};
`;
export const ModalButton = styled.button`
  border: none;
  outline: none;
  padding: ${(props) => `${props.theme.padding.sm} ${props.theme.padding.md}`};
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.color.primary};
`;
