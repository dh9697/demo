import { CommentSwiper } from '../Main/CommentSwiper';
import { Count } from '../Main/Count';
import { Hero } from '../Main/Hero';
import { PortfolioSwiper } from '../Main/PortfolioSwiper';
import { ProductionProcess } from '../Main/ProductionProcess';

export function MainPage() {
  return (
    <>
      <Hero />
      <Count />
      <PortfolioSwiper />
      <CommentSwiper />
      <ProductionProcess />
    </>
  );
}
