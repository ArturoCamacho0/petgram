import styled, { css } from 'styled-components';
import { downKeyFrames } from '../../../styles/Animation';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
    {
    animation: ${downKeyFrames} 300ms ease-out;
    ${downKeyFrames};
    background: rgba( 23, 23, 23, 0.9 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.3 );
    backdrop-filter: blur( 8.5px );
    -webkit-backdrop-filter: blur( 8.5px );
    left: 0;
    margin: 0 auto;
    width: 100%;
    padding: 10px;
    position: fixed;
    top: 0px;
    z-index: 1;
    }
  `};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  padding: 0 8px;
`;