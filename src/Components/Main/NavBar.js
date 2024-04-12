import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const slideDown = keyframes`
from{
  transform: translateY(-100%);
}
to{
  transform: translateY(0);
}
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideOut = keyframes`
from{
  transform: translateX(0);
}to{
  transform: translateX(100%);
}`;
const Container = styled.div`
  font-family: var(--global-font);
  width: 100%;
  ${({ isScrolled }) =>
    isScrolled &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: white;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
      z-index: 10;
      animation: ${slideDown} 0.2s ease-out forwards;
    `}
  @media(max-width: 1024px) {
    & .navBarSection {
      display: none;
    }
    & .hamburger {
      opacity: 1;
    }
  }
`;
const ContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 0;
  ${({ isScrolled }) =>
    isScrolled &&
    css`
      max-width: 1200px;
      margin: 0 auto;
      @media (max-width: 1200px) {
        padding: 0.7rem 2rem;
      }
    `}
`;
const LogoContainer = styled(NavLink)`
  display: flex;
  gap: 1rem;
  text-decoration: none;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--global-color-primary);
    letter-spacing: -1px;
    line-height: 20px;
    text-shadow: -1px -1px 0 var(--global-color-white),
      1px -1px 0 var(--global-color-white), -1px 1px 0 var(--global-color-white),
      1px 1px 0 var(--global-color-white);
  }
`;
const Logo = styled.div`
  background-image: url('https://k.kakaocdn.net/dn/4mEzx/btsGqrWUkhI/qsPPalHDVQTpWgO0YKGO30/img_xl.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;
const Hamburger = styled.div`
  opacity: 0;
  & .hamburgerInner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    & span {
      display: inline-block;
      z-index: 100;
      width: 25px;
      height: 3px;
      background-color: var(--global-color-text-soft);
      background-color: ${(props) =>
        props.isOpen
          ? 'var(--global-color-white)'
          : 'var(--global-color-text-soft)'};
      transition: transform 0.3s ease, opacity 0.3s ease;
      &:nth-child(1) {
        transform: ${(props) =>
          props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
      }
      &:nth-child(2) {
        opacity: ${(props) => (props.isOpen ? '0' : '1')};
      }
      &:nth-child(3) {
        transform: ${(props) =>
          props.isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
      }
    }
  }
`;
const NavBarSection = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--global-color-text-soft);
  font-weight: 900;
  padding: 8px 16px;
  text-align: center;
  &.inquire {
    background-image: linear-gradient(
      to right,
      var(--global-color-purple) 0%,
      var(--global-color-pink) 51%,
      var(--global-color-purple) 100%
    );
    padding: 10px 20px;
    border-radius: 50px;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
  }
  &.inquire:hover {
    background-position: right center;
    color: var(--global-color-white);
  }
`;
const MenuBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
  animation: ${(props) =>
    props.isOpen
      ? css`
          ${slideIn} 0.5s forwards
        `
      : css`
          ${slideOut} 0.5s forwards
        `};
  & .menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--global-color-white);
    gap: 3rem;
  }
`;
const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: var(--global-color-white);
  font-size: 20px;
`;

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container isScrolled={isScrolled}>
        <ContainerInner isScrolled={isScrolled}>
          <LogoContainer to={'/'}>
            <Logo></Logo>
            <div>
              <p>Apkoc</p>
              <p>Design</p>
            </div>
          </LogoContainer>
          <Hamburger className="hamburger" isOpen={isMenuOpen}>
            <div
              className="hamburgerInner"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <MenuBackground isOpen={isMenuOpen}>
              <div className="menu">
                <MenuLink to={'/회사소개'}>회사소개</MenuLink>
                <MenuLink to={'/서비스-안내'}>서비스 안내</MenuLink>
                <MenuLink to={'포트폴리오'}>포트폴리오</MenuLink>
                <MenuLink>칼럼</MenuLink>
                <MenuLink>가격안내</MenuLink>
                <MenuLink className="inquire">문의하기</MenuLink>
              </div>
            </MenuBackground>
          </Hamburger>
          <NavBarSection className="navBarSection">
            <StyledNavLink to={'/회사소개'}>회사소개</StyledNavLink>
            <StyledNavLink to={'/서비스-안내'}>서비스 안내</StyledNavLink>
            <StyledNavLink to={'포트폴리오'}>포트폴리오</StyledNavLink>
            <StyledNavLink>칼럼</StyledNavLink>
            <StyledNavLink>가격안내</StyledNavLink>
            <StyledNavLink className="inquire">문의하기</StyledNavLink>
          </NavBarSection>
        </ContainerInner>
      </Container>
      <Outlet />
    </>
  );
}
