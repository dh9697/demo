import { createGlobalStyle } from 'styled-components';
import { Project } from './Components/Project';

const GlobalStyle = createGlobalStyle`
:root{
    --global-color-primary: #0086AC;
    --global-color-secondary: #ED7700;
    --global-color-text: #292524;
    --global-color-text-soft: #454545;
    --global-color-gray: #78716c;
    --global-color-lightgray: #999999;
    --global-color-white: #f3f3f3;
    --global-color-pink: #F69AA8;
    --global-color-lightpink: #f7e1e4;
    --global-color-orange: #FBA88D;
    --global-color-sky: #BDDAFC;
    --global-color-purple: #E0BDF9;
    --global-font-bold: Freesentation-9Black;
    --global-font : Pretendard-Regular;
    --global-typography-color-text-soft-font-size: 24px;
    --global-typography-color-text-font-size: 54px;
    --global-typography-color-white-font-size: 20px;
    --global-typography-color-pink-font-size: 28px;
    --global-typography-number-counting-font-size: 60px;
    --global-typography-small-font-size: 16px;
    --global-typography-medium-font-size: 40px;
    --global-typography-big-font-size: 72px;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
}
html, body {
  width: 100%;
  height: 100%;
  color: var(--global-color-text);
  font-family: var(--global-font);
}
@media (min-width: 1200px) {
  body {
    max-width: 1200px;
    margin: 0 auto;
  }
}
@media (max-width: 1200px) {
  body{
    padding: 0 2rem;
    transition: 0.5s linear;
  }
}

@media (max-width: 1024px){
  body{
    --global-typography-color-text-soft-font-size: 16px;
    --global-typography-color-text-font-size: 38px;
    --global-typography-color-white-font-size: 18px;
    --global-typography-number-counting-font-size: 48px;
    --global-typography-color-pink-font-size: 24px;
    --global-typography-small-font-size: 14px;
    --global-typography-medium-font-size: 40px;
    --global-typography-medium-font-size: 32px;
    --global-typography-big-font-size: 44px;
  }
}
@media (max-width: 767px){
  body{
    --global-typography-color-text-soft-font-size: 14px;
    --global-typography-color-text-font-size: 30px;
    --global-typography-color-white-font-size: 16px;
    --global-typography-number-counting-font-size: 40px; 
    --global-typography-color-pink-font-size: 20px;
    --global-typography-small-font-size: 12px;
    --global-typography-medium-font-size: 26px;
    --global-typography-big-font-size: 30px;
  }
}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Freesentation-9Black';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Project />
    </>
  );
}
