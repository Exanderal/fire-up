import styled from "styled-components";
import galleryBackground from "../../images/galleryBackground.png";

export const BackgroundImage = styled.section`
  background: url(${galleryBackground});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  padding: ${(props) => `${props.theme.padding.hg} 0`};
  @media only screen and (max-width: 1000px) {
    padding: ${(props) =>
      `${props.theme.padding.hg} ${props.theme.padding.sm}`};
  }
`;
