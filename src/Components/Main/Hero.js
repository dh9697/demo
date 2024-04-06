import styled, { keyframes } from 'styled-components';
import heart1 from '../../image/heart1.png';
import heart2 from '../../image/heart2.png';
const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  & p {
    font-size: 24px;
    font-weight: 900;
    padding-top: 5rem;
    padding-bottom: 3rem;
    color: var(--global-color-primary);
    text-shadow: -1px -1px 0 var(--global-color-white),
      1px -1px 0 var(--global-color-white), -1px 1px 0 var(--global-color-white),
      1px 1px 0 var(--global-color-white);
  }
  & .texts {
    padding-bottom: 5rem;
    & h1 {
      font-size: 50px;
      color: var(--global-color-text);
      & span {
        color: var(--global-color-white);
      }
    }
  }
  & .scroll {
    padding: 1rem 2rem;
    background-color: red;
    display: inline-block;
    font-size: 20px;
    font-weight: 900;
  }
  & .imageBox {
    position: relative;
    & .image1 {
      width: 350px;
      position: absolute;
      top: 0;
      left: left;
    }
    & .image2 {
      width: 300px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;
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
const AnimatedImage = styled.img`
  animation: ${floatAnimation} 3s ease-in-out infinite;
  object-fit: cover;
  width: 100%;
`;
export function Hero() {
  return (
    <>
      <Container>
        <div>
          <p>기획형 상세페이지 전문 에이전시 아피콕디자인</p>
          <div className="texts">
            <h1>잘 기획된 상세페이지 하나,</h1>
            <h1>
              마케팅 비용의 <span>5배 수익이 나오는</span>
            </h1>
            <h1>‘매출자판기’나 다름 없습니다.</h1>
          </div>
        </div>
        <div className="imageBox">
          <div className="image1">
            <AnimatedImage src={heart1} alt="이미지" />
          </div>
          <div className="image2">
            <AnimatedImage src={heart2} alt="이미지" />
          </div>
        </div>
        <div className="scroll">자신감을 가진 이유? 3분만에 확인해보세요.</div>
      </Container>
    </>
  );
}
