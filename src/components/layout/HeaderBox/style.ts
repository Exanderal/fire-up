import styled from "styled-components";

type ColorProps = {
  color: string;
};

export const BoxWrapper = styled("div")`
  display: flex;
  align-items: center;
  flex: 1;
  width: 20rem;
  :not(:last-child) {
    margin-right: 3rem;
    @media (max-width: 768px) {
      margin-right: 1rem;
    }
    @media (max-width: 568px) {
      margin-right: 0;
    }
  }
  :hover {
    img {
      opacity: 1;
    }
    p {
      opacity: 1;
    }
  }
  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: stretch;
  }
  @media only screen and (max-width: 350px) {
    max-width: 14rem;
  }
`;
export const BoxIcon = styled.img<ColorProps>`
  height: 4rem;
  width: 4rem;
  background-color: ${(props) => props.color};
  opacity: 0.9;
  @media (max-width: 1070px) {
    align-self: center;
  }
  @media (max-width: 568px) {
    display: none;
    visibility: hidden;
  }
`;

export const BoxTitle = styled.p<ColorProps>`
  background-color: ${(props) => props.color};
  flex: 1;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  padding: 0.2rem 0 0.2rem 0.5rem;
  opacity: 0.7;
  text-align: left;
  @media only screen and (max-width: 1070px) {
    text-align: center;
  }
`;
