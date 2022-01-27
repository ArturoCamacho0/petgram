import { css, keyframes } from 'styled-components';

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyFrames} ${type};
`;

export const downKeyFrames = keyframes`
  from {
    transform: translateY(-100%);
  }
  to{
    transform: translateY(0);
  }
`;