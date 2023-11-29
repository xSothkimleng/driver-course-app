'use client';
import styled from 'styled-components';

const CardStyle = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  // box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Card = ({ children }) => {
  return <CardStyle>{children && children}</CardStyle>;
};

export default Card;
