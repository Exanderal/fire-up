import styled from "styled-components";
import Container from "@material-ui/core/Container";

export const FeaturesContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-top: ${(props) => props.theme.padding.hg};
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 1000px) {
    gap: 0;
  }
`;
