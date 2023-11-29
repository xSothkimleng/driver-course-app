'use client';
import styled from 'styled-components';
import { IconLogo } from '@/utils/icon';
import Link from 'next/link';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: fixed;
  width: 100%;
  height: 9vh;
  bottom: 0;
  // padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    padding: 0.5rem;
  }
`;
const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
    justify-content: space-around;
  }
  li {
    // padding: 1rem 1rem;
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
      <Menu>
        <li>
          <Link href='/'>{IconLogo.home}</Link>
        </li>
        <li>
          <Link href='/study'>{IconLogo.book}</Link>
        </li>
        <li>{IconLogo.megaPhone}</li>
        <li>{IconLogo.person}</li>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
