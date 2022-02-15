import styled from "styled-components";
import { HStack } from "../Containers/Containers";

const Header = styled(HStack)`
  position: fixed;
  top: 0;
  background: white;
  width: 100%;
  padding: 4px 8px;
  box-shadow: 0px 0px 8px 0px rgb(33 33 33 / 30%);
`;

export default Header;
