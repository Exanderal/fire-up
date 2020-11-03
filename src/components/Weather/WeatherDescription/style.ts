import styled from "styled-components";
import Container from "@material-ui/core/Container";

export const WeatherContainer = styled(Container)`
  padding: ${(props) => props.theme.padding.md} 0;
  background-color: ${(props) => props.theme.color.white};
  height: 100%;
  position: relative;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 943px) {
    justify-content: center;
  }
`;
export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 945px) {
    :not(:last-child) {
      margin-right: 2rem;
    }
    margin-bottom: 1rem;
  }
  @media (max-width: 565px) {
    :not(:last-child) {
      margin-right: 0;
    }
  }
`;

export const TemperatureHeading = styled.h3`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.sm};
  margin-top: ${(props) => props.theme.margin.sm};
  font-weight: 300;
`;

export const WeatherIcon = styled.img`
  width: 1.1rem;
  height: 1.6rem;
  margin-right: ${(props) => props.theme.margin.sm};
`;
