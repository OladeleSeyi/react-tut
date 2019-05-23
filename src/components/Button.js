import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${prop => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  padding: 0.2rem 0.5rem;
  margin: 0.2rem;
  border-radius: 0.5rem;
  border: 0.2rem solid var(--mainWhite);
  transition: all 0.5s ease-in-out;
  &: hover {
    background: ${prop =>
      prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
