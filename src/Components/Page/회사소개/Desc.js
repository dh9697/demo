import { useRef } from 'react';
import { DescHero } from './DescHero';
import { DescContent1 } from './DescContent1';

export function Desc() {
  const descContentRef = useRef(null);
  const scrollToDescContent1 = () => {
    descContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <DescHero scrollToDescContent1={scrollToDescContent1} />
      <div ref={descContentRef}>
        <DescContent1 />
      </div>
    </>
  );
}
