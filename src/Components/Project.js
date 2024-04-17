import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './Main/NavBar';
import { Desc } from './Page/회사소개/Desc';
import { Service } from './Page/서비스안내/Service';
import { Portfolio } from './Page/Portfolio';
import { MainPage } from './Page/MainPage';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export function Project() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<MainPage />} />
            <Route path="회사소개" element={<Desc />}></Route>
            <Route path="서비스-안내" element={<Service />}></Route>
            <Route path="포트폴리오" element={<Portfolio />}></Route>
            <Route path="전문칼럼"></Route>
            <Route path="가격안내"></Route>
            <Route path="문의하기"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
