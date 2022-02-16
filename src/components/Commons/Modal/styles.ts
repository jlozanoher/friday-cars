import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: relative;
  min-width: 30%;
  min-height: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  @media (max-width: 768px) {
    min-width: 70%;
  }
`;

export const CloseButton = styled.div`
  color: black;
  position: absolute;
  top: 0;
  right: 0;
  margin: 4px 8px;
  font-size: 28px;
  line-height: 22px;
  cursor: pointer;
`;
