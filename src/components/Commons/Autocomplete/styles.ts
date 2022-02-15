import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;

  > label {
    font-weight: 500;
  }
`;

export const SuggestionContainer = styled.div`
  position: absolute;
  top: 33px;
  background-color: white;
  padding: 4px;
  z-index: 1;
  max-height: 300px;
  width: 170px;
  overflow-y: scroll;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
`;

export const Suggestion = styled.div`
  cursor: pointer;

  :hover {
    background-color: #00000014;
    font-weight: 500;
  }
`;
