import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;
const MenuBackground = styled.div`
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: visibility 0s linear ${(props) => (props.isOpen ? '0s' : '0.5s')},
    transform 0.5s ease;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
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

export function NavBarMenu({ isOpen, setIsMenuOpen }) {
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleTransitionEnd = () => {
    if (!isOpen) {
    }
  };
  return (
    <>
      <Container>
        <MenuBackground isOpen={isOpen} onTransitionEnd={handleTransitionEnd}>
          <div className="menu">
            <MenuLink to={'/회사소개'} onClick={handleCloseMenu}>
              회사소개
            </MenuLink>
            <MenuLink to={'/서비스-안내'} onClick={handleCloseMenu}>
              서비스 안내
            </MenuLink>
            <MenuLink to={'포트폴리오'} onClick={handleCloseMenu}>
              포트폴리오
            </MenuLink>
            <MenuLink onClick={handleCloseMenu}>칼럼</MenuLink>
            <MenuLink onClick={handleCloseMenu}>가격안내</MenuLink>
            <MenuLink onClick={handleCloseMenu} className="inquire">
              문의하기
            </MenuLink>
          </div>
        </MenuBackground>
      </Container>
    </>
  );
}
