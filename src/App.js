import { createGlobalStyle } from 'styled-components';
import { Project } from './Components/Project';

const GlobalStyle = createGlobalStyle`
:root{
    --global-color-primary: #0086AC;
    --global-color-secondary: #ED7700;
    --global-color-text: #292524;
    --global-color-text-soft: #454545;
    --global-color-white: #f3f3f3;
    --global-color-pink: #F69AA8;
    --global-color-orange: #FBA88D;
    --global-color-sky: #BDDAFC;
    --global-color-purple: #E0BDF9;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
  font-family: 'Pretendard-Regular';
}
html, body {
  width: 100%;
  height: 100%;
}
@media (min-width: 1200px) {
  body {
    max-width: 1200px;
    margin: 0 auto;
  }
}
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
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
