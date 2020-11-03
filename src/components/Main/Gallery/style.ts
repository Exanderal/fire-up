import styled from "styled-components";
import Container from "@material-ui/core/Container";

export const GalleryContainer = styled(Container)`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  margin-top: 4rem 0;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
