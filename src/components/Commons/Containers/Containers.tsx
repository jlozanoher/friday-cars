import styled, { css } from "styled-components";

const IStack = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const HStack = styled.div`
  ${IStack}
`;

export const VStack = styled.div`
  flex-direction: column;
`;
