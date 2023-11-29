'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #0048a8;
  width: 100%;
`;

const PageHeader = ({ children, isRouter, title }) => {
  return <Wrapper>{children && children}</Wrapper>;
};

export default PageHeader;
