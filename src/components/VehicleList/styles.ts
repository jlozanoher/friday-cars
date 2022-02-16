import styled from "styled-components";
import { HStack } from "../Commons/Containers/Containers";

export const Container = styled(HStack)`
  width: 80%;
  padding: 8px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
