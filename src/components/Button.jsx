import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  padding: 0.5rem 0.9rem;
  border: 1px solid rgb(255, 207, 207);
  color: #625959;
  border-radius: 5px;
  letter-spacing: 0.1rem;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: rgb(255, 207, 207);
  }
  &:active {
    transform: scale(0.96);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;
