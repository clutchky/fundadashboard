import styled, { keyframes } from "styled-components";

const fade = keyframes`
 0%, 100% {
  opacity: 1;
 }

60% {
  opacity: 0;
 }
`;

const Spinner = styled.div`
  --clr: rgb(0, 113, 128);
  --gap: 6px;
  /* gap between each circle */
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap);
`;

const Span = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(--clr);
  opacity: 0;

  &:nth-child(1) {
    animation: ${fade} 1s ease-in-out infinite;
  }

  &:nth-child(2) {
    animation: ${fade} 1s ease-in-out 0.33s infinite;
  }

  &:nth-child(3) {
    animation: ${fade} 1s ease-in-out 0.66s infinite;
  }
`;

function Loader() {
  return (
    <Spinner>
      <Span></Span>
      <Span></Span>
      <Span></Span>
    </Spinner>
  );
}

export default Loader;
