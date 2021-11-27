import styled from "styled-components";

type RatingProps = {
  rating: number;
};

export const Container = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 0.5em 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const ProductCard = styled.div`
  width: 350px;
  margin: 1em 0;
  padding: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: 2px solid #eee;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);

  img {
    height: 200px;
    width: 200px;
    margin: 0.5em auto;
  }

  h2 {
    width: 100%;
    margin: 0.5em 0 0.8em;
    font-size: 1.5rem;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  h4 {
    width: max-content;
    margin-bottom: 0.3em;
    padding: 0.4em 0.8em;
    font-size: 1rem;
    color: green;
    background-color: #eee;
    border-radius: 3px;
  }

  p {
    margin: 0.5em 0;
    color: #666;
    display: -webkit-box !important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5em;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  button {
    margin-bottom: 0;
  }
`;

export const Rating = styled.div<RatingProps>`
  font-size: 1.1rem;
  font-weight: 700;
  color: #444;
  span {
    color: ${(props) => (props.rating < 4 ? "red" : "green")};
  }
`;
