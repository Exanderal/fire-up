import styled from "styled-components";

export const ListWrapper = styled.div`
  width: calc(40% - 1rem);
  background-color: ${(props) => props.theme.color.white};
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
export const ListIcon = styled.img`
  margin-right: ${(props) => props.theme.margin.sm};
`;
export const ListHeading = styled.h2`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color.lightBlue};
  padding: ${(props) => props.theme.padding.sm};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.md};
  letter-spacing: 0.2rem;
  font-style: italic;
  margin-top: -0.2rem;
`;

export const OrderedList = styled.ol`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: ${(props) => `${props.theme.padding.md}`};
  @media only screen and (max-width: 1000px) {
    padding: ${(props) =>
      `${props.theme.padding.sm} ${props.theme.padding.md}`};
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const ItemIndex = styled.p`
  position: relative;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.md};
  padding-right: 1.2rem;
  ::before {
    position: absolute;
    display: block;
    content: "";
    bottom: -0.1rem;
    left: -1rem;
    width: 3rem;
    height: 0.5rem;
    background-color: ${(props) => props.theme.color.blue};
  }
  @media (max-width: 450px) {
    display: none;
    visibility: hidden;
  }
`;
export const ItemDescription = styled.p`
  font-size: 0.8rem;
  @media only screen and (max-width: 1000px) {
    align-self: flex-end;
  }
`;
export const HiddenIndex = styled.span`
  display: none;
  visibility: hidden;

  @media (max-width: 450px) {
    display: inline-block;
    visibility: visible;
  }
`;
