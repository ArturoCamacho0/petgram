import styled from 'styled-components';
import { fadeIn } from '../../styles/Animation';

export const Article = styled.article`
  min-height: 200px;
`;

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  margin-top: 1rem;
`;

export const Image = styled.img`
  ${fadeIn({time: '0.5s', type: 'ease-in-out'})};
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: transparent;
  border: none;
  margin-bottom: 1rem;
  & svg {
    margin-right: 4px;
  }
`;
