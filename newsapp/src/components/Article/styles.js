import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const Card = styled.div`
  margin: 0 auto;
  max-width: 50vw;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 10px;
  z-index: 10000;

  img {
    width: 100%;
    height: auto;
  }
`;

export const CardTextContent = styled.div`
  padding: 10px;

  h1,
  h2,
  h3,
  h4,
  p {
    margin-top: 10px;
  }
`;

export const Link = styled(ReactLink)``;
