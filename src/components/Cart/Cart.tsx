import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllVehicles, setDetailsOpen } from "../../slices";
import { Badge } from "../Commons/Badge";
import CartIcon from "./cart-icon.png";
import * as S from "./styles";

const Cart = () => {
  const dispatch = useDispatch();

  const { selected } = useSelector(selectAllVehicles);

  const handleClick = () => selected && dispatch(setDetailsOpen(true));

  return (
    <S.CartContainer onClick={handleClick}>
      <S.Img src={CartIcon} alt="car-icon" />
      {selected && <Badge data-testid={`Badge`} />}
    </S.CartContainer>
  );
};

export default Cart;
