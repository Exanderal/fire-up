import styled from "styled-components";
import Container from "@material-ui/core/Container";

type ColorProps = {
  color: string;
};

export const Wrapper = styled.main`
  height: auto;
  background-color: white;
  min-height: 100vh;
`;

export const WeatherContainer = styled(Container)`
  padding: ${(props) => `${props.theme.padding.md} ${props.theme.padding.sm}`};
  background-color: ${(props) => props.theme.color.white};
  height: 100%;
  position: relative;
  display: flex;
  flex: 1;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageText = styled.p<ColorProps>`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.color};
  padding: ${(props) => `${props.theme.padding.md} ${props.theme.padding.lg}`};
  font-weight: 400;
  @media (max-width: 600px) {
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.sm};
    padding: ${(props) =>
      `${props.theme.padding.md} ${props.theme.padding.sm}`};
  }
`;
export const ImageTextRight = styled(ImageText)`
  margin-left: auto;
`;
