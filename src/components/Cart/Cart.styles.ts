import styled from "styled-components";

export const CartContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 5;
  width: 60vw;
  min-height: 100vh;
  background-color: #fff;
  border: 2px solid #eee;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  h4 {
    margin: 1.2em 1em;
    font-size: 1.1rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const CartItemStyled = styled.div`
  margin: 1em;
  padding: 1em;
  border-radius: 3px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);

  & > p {
    font-size: 1rem;
    font-weight: 400;
    span {
      font-size: 1.1rem;
      font-weight: 700;
    }
  }
`;

export const CartContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.5em;

  img {
    height: 200px;
    width: 200px;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  h3 {
    width: calc(100%-200px);
    margin-bottom: 0.3em;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
  }

  h4 {
    width: max-content;
    margin-bottom: 0.3em;
    padding: 0.4em 0.8em;
    font-size: 0.9rem;
    color: green;
    background-color: #eee;
    border-radius: 3px;
  }

  p {
    margin-top: 0.8em;
    color: #666;
    display: -webkit-box !important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5em;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
