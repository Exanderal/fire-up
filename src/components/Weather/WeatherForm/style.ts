import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  align-self: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const WeatherInput = styled.input`
  outline: none;
  border: none;
  font-weight: 300;
  padding: 0.2rem 0.4rem;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-family: inherit;
  border-bottom: 1px solid ${(props) => props.theme.color.darkGrey};
  @media (max-width: 500px) {
    margin-bottom: ${(props) => props.theme.margin.md};
  }
`;
export const WeatherBtn = styled.button`
  background-color: ${(props) => props.theme.color.primary};
  padding: 0.5rem 1.6rem;
  outline: none;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: ${(props) => props.theme.margin.md};
  color: ${(props) => props.theme.color.darkGrey};
  :hover {
    background-color: ${(props) => props.theme.color.darkGrey};
    color: ${(props) => props.theme.color.white};
  }
`;
