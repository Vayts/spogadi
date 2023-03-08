import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const fire = keyframes`
  0% {
    fill: #fff;
  }

  50% {
    fill: #fdeaea;
  }

  100% {
    fill: white;
  }
`;

export const LogoWrapper = styled.div`
  animation: ${appear} 0.4s linear;
`;

export const LogoFire = styled.path`
  animation: ${appear} 1.5s linear, ${fire} 10s infinite;
`;
