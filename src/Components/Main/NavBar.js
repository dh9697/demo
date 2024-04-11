import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Container = styled.div`
  font-family: var(--global-font);
  width: 100%;
  ${({ isScrolled }) =>
    isScrolled &&
    css`
      position: sticky;
      top: 0;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
      z-index: 10;
      background-color: white;
      max-width: none;
      width: 100%;
    `}
`;
const ContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
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
        <ContainerInner>
          <LogoContainer to={'/'}>
            <Logo></Logo>
            <div>
              <p>Apkoc</p>
              <p>Design</p>
            </div>
          </LogoContainer>
          <NavBarSection>
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
