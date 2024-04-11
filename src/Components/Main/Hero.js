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
    transform: translateY(-40px);
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
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    max-width: none;
    background-image: url('https://i.pinimg.com/564x/b1/b8/78/b1b8789fbb006eb74c7ba365033da440.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -10;
  }
  font-family: var(--global-font-bold);
  display: grid;
  grid-template-columns: 3fr 2fr;
  padding: 5rem 0;
  height: calc(100vh - 92px);
  & p {
    font-size: 24px;
    font-weight: 900;
    font-family: var(--global-font);
    padding-bottom: 3rem;
    color: var(--global-color-text-soft);
  }
  & .texts {
    padding-bottom: 5rem;
    transition: all linear;
    line-height: 70px;
    & h1 {
      font-size: 54px;
      color: var(--global-color-text);
      & span {
        color: var(--global-color-white);
        background-image: linear-gradient(
          to right,
          var(--global-color-purple) 0%,
          var(--global-color-pink) 51%,
          var(--global-color-purple) 100%
        );
        background-size: 200% auto;
      }
    }
  }
  & .scroll {
    padding: 16px 40px 16px 40px;
    color: var(--global-color-white);
    background-image: linear-gradient(
      to right,
      var(--global-color-purple) 0%,
      var(--global-color-pink) 51%,
      var(--global-color-purple) 100%
    );
    background-size: 200% auto;
    transition: 0.5s;
    box-shadow: 0 0 20px 2px #eee;
    border-radius: 5px;
    display: inline-block;
    font-size: 20px;
    font-weight: 900;
    animation: ${moveUpDown} 1.5s ease-in-out infinite;
    color: var(--global-color-white);
    cursor: pointer;
  }
  & .scroll:hover {
    background-position: right center;
    text-decoration: none;
  }
  & .imageBox {
    position: relative;
    & .image1 {
      width: 100%;
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
            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="linear"
            >
              잘 기획된 상세페이지 하나,
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="linear"
            >
              마케팅 비용의 <span>5배 수익이 나오는</span>
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
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
