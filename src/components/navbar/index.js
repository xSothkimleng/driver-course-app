'use client';
import styled from 'styled-components';
import { IconLogo } from '@/utils/icon';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 1rem;
  @media (max-width: 640px) {
    padding: 0.5rem;
  }
`;
const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 640px) {
    justify-content: space-around;
  }
  li {
    padding: 1rem 1rem;
    margin: 0 1rem;
    border-radius: 0.5rem;
    @media (max-width: 640px) {
      margin: 0;
      padding: 0.5rem;
    }
  }
  li:hover {
    background-color: #d9d9d9;
  }
  li svg {
    width: 3rem;
    height: 3rem;
    @media (max-width: 640px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <Menu>
          <li>{IconLogo.home}</li>
          <li>{IconLogo.book}</li>
          <li>{IconLogo.megaPhone}</li>
          <li>{IconLogo.person}</li>
        </Menu>
      </div>
    </Wrapper>
  );
};

export default Navbar;