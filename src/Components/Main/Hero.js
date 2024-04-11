import styled, { keyframes } from 'styled-components';
import heart1 from '../../image/heart1.png';
import heart2 from '../../image/heart2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;
const floatAnimation2 = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0px);
  }
`;
const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0px);
}
50% {
    transform: translateY(10px);
}
`;

const Container = styled.div`
  font-family: var(--global-font-bold);
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin-top: 6rem;
  & p {
    font-size: 24px;
    font-weight: 900;
    font-family: var(--global-font);
    padding-top: 5rem;
    padding-bottom: 3rem;
    color: var(--global-color-white);
  }
  & .texts {
    padding-bottom: 5rem;
    & h1 {
      font-size: 54px;
      color: var(--global-color-text);
      & span {
        color: var(--global-color-white);
      }
    }
  }
  & .scroll {
    padding: 1rem 2rem;
    background: linear-gradient(#e0bdf9, #f69aa8, #fba88d, #bddafc);
    display: inline-block;
    font-size: 20px;
    font-weight: 900;
    animation: ${moveUpDown} 1.5s ease-in-out infinite;
    color: var(--global-color-white);
  }
  & .imageBox {
    position: relative;
    & .image1 {
      width: 350px;
      position: absolute;
      top: 0;
      left: 0;
    }
    & .image2 {
      width: 350px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

const AnimatedImage = styled.img`
  &.bigHeart {
    animation: ${floatAnimation} 3s ease-in-out infinite;
    object-fit: cover;
    width: 100%;
  }
  &.smallHeart {
    animation: ${floatAnimation2} 3s ease-in-out infinite;
    object-fit: cover;
    width: 100%;
  }
`;

export function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Container>
        <div>
          <p>기획형 상세페이지 전문 에이전시 아피콕디자인</p>
          <div className="texts">
            <h1 data-aos="fade-up" data-aos-easing="linear">
              잘 기획된 상세페이지 하나,
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-easing="linear"
            >
              마케팅 비용의 <span>5배 수익이 나오는</span>
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              ‘매출자판기’나 다름 없습니다.
            </h1>
          </div>
          <div className="scroll">
            자신감을 가진 이유? 3분만에 확인해보세요.
          </div>
        </div>
        <div className="imageBox">
          <div className="image1">
            <AnimatedImage className="bigHeart" src={heart1} alt="이미지" />
          </div>
          <div className="image2">
            <AnimatedImage className="smallHeart" src={heart2} alt="이미지" />
          </div>
        </div>
      </Container>
    </>
  );
}
