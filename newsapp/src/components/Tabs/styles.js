import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  border: 1px solid rgba(0, 0, 0, 0.2);

  ul {
    position: relative;
    list-style-type: none;
    margin: 0 auto;

    li {
      display: inline-block;
      text-decoration: none;
      font-weight: bold;
      border: 1px solid transparent;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        border-right: 1px solid #dd2323;
        border-left: 1px solid #dd2323;
      }
    }
  }
`;
