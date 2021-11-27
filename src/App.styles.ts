import styled from "styled-components";

type ButtonProps = {
  isLarge: boolean;
  bg: string;
};

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.isLarge ? "100%" : "70px")};
  margin: 1.5em 0;
  padding: 0.7em 1.3em;
  font-size: 1rem;
  font-weight: 700;
  font-family: inherit;
  background-color: ${(props) => props.bg};
  color: ${(props) => (props.bg === "#111" ? "#fff" : "#000")};
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.99);
  }
`;
