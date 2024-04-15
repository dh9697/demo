import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { NavBarMenu } from './NavBarMenu';
import { Footer } from './Footer';

const slideDown = keyframes`
from{
  transform: translateY(-100%);
}
to{
  transform: translateY(0);
}
`;
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
    color: var(--global-color-pink);
    letter-spacing: -1px;
    line-height: 20px;
    text-shadow: -1px -1px 0 var(--global-color-white),
      1px -1px 0 var(--global-color-white), -1px 1px 0 var(--global-color-white),
      1px 1px 0 var(--global-color-white);
  }
`;
const Logo = styled.div`
  background-image: url('https://img.freepik.com/premium-vector/vector-graphic-of-abstract-flower-logo-nature-beauty-logo-desgn-template_600800-227.jpg?w=826');
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
      background-color: ${(props) =>
        props.isOpen
          ? 'var(--global-color-white)'
          : 'var(--global-color-text-soft)'};
      transition: transform 0.3s ease, opacity 0.3s ease;
      &:nth-child(1) {
        transform: ${(props) =>
          props.isOpen ? 'rotate(45deg) translate(6px, 5px)' : 'none'};
        transform-origin: center;
      }
      &:nth-child(2) {
        opacity: ${(props) => (props.isOpen ? '0' : '1')};
      }
      &:nth-child(3) {
        transform: ${(props) =>
          props.isOpen ? 'rotate(-45deg) translate(6px, -5px)' : 'none'};
        transform-origin: center;
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
              <p>Demo</p>
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
        <NavBarMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </Container>
      <Outlet />
      <Footer />
    </>
  );
}
