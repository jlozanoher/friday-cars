import styled from "styled-components";

const Input = styled.input`
  border: 1px solid ${(props: any) => (props.disabled ? "gray" : "#98bda8")};
  border-radius: 4px;
  width: 160px;
  height: 30px;
  padding: 0 8px;
`;

export default Input;
