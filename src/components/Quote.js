import React from "react";
import styled from "@emotion/styled";

const QuoteContainer = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 2rem;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding: 0 1rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: "absolute";
      top: -2rem;
      left: -1rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;
const Quote = ({ quote }) => {
  return (
    <QuoteContainer>
      <h1>{quote.quote}</h1>
      <p>{quote.author}</p>
    </QuoteContainer>
  );
};

export default Quote;
