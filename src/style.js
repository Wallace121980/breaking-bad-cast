import styled from 'styled-components';
import { css, createGlobalStyle } from 'styled-components';
import background from './img/bg.jpg';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

  :root {
    --d: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    background: #000 url(${background}) no-repeat center center/cover;
    height: 100vh;
    color: #fff;
    font-family: Playfair Display, serif;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 20px 20px;
`;

export const StyledNavbar = styled.nav`
  font-size: 2rem;

  > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  > ul li {
    cursor: pointer;
    padding: 0.5rem;
    flex: auto;
    text-align: center;
  }

  > ul li:hover {
    --d: 100%;
  }

  > ul li a {
    text-decoration: none;
    color: #fff;
    padding: 0.5rem;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 3px
      no-repeat;
    transition: 0.5s;
  }
`;

export const StyledHeader = styled.header`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 200px;
  }
`;

export const StyledSearch = styled.section`
  height: 100px;
`;

export const Input = styled.input`
  display: block;
  padding: 10px;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  width: 60%;
  margin: auto;
  outline: none;
`;

// Grid for cards section
export const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;

    > img {
      width: 100%;
      height: 300px;
      object-fit: contain;
    }
  }
`;

// Flipping card
export const Card = styled.div`
  position: relative;
  height: 300px;
  cursor: pointer;
  perspective: 1000px;
  transition: transform 0.8s;

  &:hover {
    & > div:first-of-type {
      // frontside of the card
      transform: rotateY(180deg);
    }

    & > div:last-of-type {
      // backside of the card
      transform: rotateY(0deg);
    }
  }
`;

// Card sides
export const CardSide = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #333;
  transition: transform 0.8s;
`;

// Card side - front
export const CardFront = styled.div`
  ${CardSide};

  padding: ${(props) => (props.padding ? '20px' : '0px')};
`;

// Card side - back
export const CardBack = styled.div`
  ${CardSide};

  transform: rotateY(-180deg);
  padding: 20px;

  > ul li {
    list-style: none;
    padding-bottom: 10px;
  }
`;

export const CardTitle = styled.h1`
  font-size: 25px;
  border-bottom: 1px #fff solid;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
