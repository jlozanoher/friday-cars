import styled from "styled-components";
import { Card as CardParent } from "../Commons/Card";

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

export const Img = styled.img`
  width: 150px;
  margin: 8px;
`;

export const Card = styled(CardParent)`
  &.selected {
    box-shadow: 0 0 11px rgb(12 80 1 / 40%);
  }
`;
