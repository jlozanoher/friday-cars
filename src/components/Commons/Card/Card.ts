import styled from "styled-components";
import { VStack } from "../Containers/Containers";

const Card = styled(VStack)`
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;

  small {
    color: gray;
  }

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.4);
  }
`;

export default Card;
