import styled from "styled-components";
import { Container } from "@material-ui/core";

type ImageProps = {
  image: string;
};

export const BackgroundImage = styled.header<ImageProps>`
  width: 100%;
  height: auto;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => `${props.theme.padding.hg} ${props.theme.padding.lg}`};
  min-height: 70vh;
  text-align: center;
  @media (max-width: 420px) {
    padding: ${(props) =>
      `${props.theme.padding.hg} ${props.theme.padding.md}`};
  }
`;
export const HeaderHeading = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.hg};
  padding: 0 ${(props) => props.theme.padding.md};
  @media (max-width: 420px) {
    padding: 0;
  }
`;
export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: auto;
  margin: auto 2rem 0 2rem;
  @media (max-width: 568px) {
    flex-direction: column;
    align-items: center;
  }
`;
