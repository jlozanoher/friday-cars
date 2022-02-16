import { useEffect } from "react";
import * as S from "./styles";

interface Props {
  children?: any;
  isOpen?: boolean;
  handleClose?: () => void;
}

const Modal = (props: Props) => {
  const { children, isOpen, handleClose = () => {} } = props;

  useEffect(() => {
    const closeOnEscapeKey = (e: any) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.CloseButton onClick={handleClose}>x</S.CloseButton>
        {children}
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
