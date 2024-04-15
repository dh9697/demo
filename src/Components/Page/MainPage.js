import { useRef } from 'react';
import { CommentSwiper } from '../Main/CommentSwiper';
import { Count } from '../Main/Count';
import { Hero } from '../Main/Hero';
import { PortfolioSwiper } from '../Main/PortfolioSwiper';
import { ProductionProcess } from '../Main/ProductionProcess';

export function MainPage() {
  const countRef = useRef(null);
  const scrollToCount = () => {
    countRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Hero scrollToCount={scrollToCount} />
      <div ref={countRef}>
        <Count />
      </div>
      <PortfolioSwiper />
      <CommentSwiper />
      <ProductionProcess />
    </>
  );
}
