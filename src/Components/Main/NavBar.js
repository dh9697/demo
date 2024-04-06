import { NavLink, Outlet, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ show }) =>
    show &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        max-width: none;
        margin-left: calc(-50vw + 50%);
        background-image: url('https://i.pinimg.com/564x/b1/b8/78/b1b8789fbb006eb74c7ba365033da440.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
      }
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
`;

export function NavBar() {
  const location = useLocation();
  const showBackground = location.pathname === '/';
  return (
    <>
      <Container show={showBackground}>
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
            <StyledNavLink>서비스 안내</StyledNavLink>
            <StyledNavLink>포트폴리오</StyledNavLink>
            <StyledNavLink>칼럼</StyledNavLink>
            <StyledNavLink>가격안내</StyledNavLink>
            <StyledNavLink>문의하기</StyledNavLink>
          </NavBarSection>
        </ContainerInner>
      </Container>
      <Outlet />
    </>
  );
}
