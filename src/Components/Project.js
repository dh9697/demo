import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hero } from './Main/Hero';
import { NavBar } from './Main/NavBar';
import { Desc } from './Page/Desc';

export function Project() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Hero />} />
            <Route path="/회사소개" element={<Desc />}></Route>
            <Route path="/서비스-안내"></Route>
            <Route path="/포트폴리오"></Route>
            <Route path="/전문칼럼"></Route>
            <Route path="/가격안내"></Route>
            <Route path="/문의하기"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
