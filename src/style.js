import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 20px 20px;
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
  padding: 20px;
  background-color: #333;
  transition: transform 0.8s;
`;

// Card side - front
export const CardFront = styled.div`
  ${CardSide};
`;

// Card side - back
export const CardBack = styled.div`
  ${CardSide};

  transform: rotateY(-180deg);

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
  height: 300px;
  object-fit: cover;
`;

// export const Card = styled.div`
//   cursor: pointer;
//   height: 300px;
//   perspective: 1000px;
//   padding: 20px;
//   background-color: #333;

//   &:hover {
//     transform: rotateY(180deg);
//   }
// `;

// export const CardInner = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   transition: transform 0.8s;
//   transform-style: preserve-3d;
// `;

// export const CardFront = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;

//   > h1 {
//     font-size: 25px;
//     border-bottom: 1px #fff solid;
//     padding-bottom: 10px;
//     margin-bottom: 10px;
//   }
// `;

// export const CardBack = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
//   color: white;
//   transform: rotateY(180deg);

//   > ul li {
//     list-style: none;
//     padding-bottom: 10px;
//   }
// `;
