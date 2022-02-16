import styled from "styled-components";

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
  width: 250px;
  margin: 16px 8px;
`;

export const SelectBtn = styled.div`
  padding: 8px;
  background: #1b875a;
  border-radius: 4px;
  font-weight: 400;
  cursor: pointer;

  &.red {
    background: #b54124;
  }
`;
