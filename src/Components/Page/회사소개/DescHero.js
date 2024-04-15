import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  color: var(--global-color-text);
  font-family: var(--global-font-bold);
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  height: 700px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: calc(100vw - 17px);
    transform: translateX(-50%);
    height: 100%;
    background-image: url('https://i.pinimg.com/564x/76/38/4d/76384df42024bfc1864bb517cb466931.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -10;
  }
  & p {
    font-family: var(--global-font);
    font-size: var(--global-typography-color-white-font-size);
  }
  & span {
    color: var(--global-color-pink);
  }
  & .texts {
    transition: all linear;
    margin: 3rem 0;
    & h1 {
      font-size: var(--global-typography-big-font-size);
    }
  }
  & .scroll {
    margin: 4rem 0;
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
    border-radius: 5px;
    display: inline-block;
    font-size: var(--global-typography-color-white-font-size);
    font-weight: 900;
    color: var(--global-color-white);
    cursor: pointer;
  }
  & .scroll:hover {
    background-position: right center;
    text-decoration: none;
  }
  & figure {
    margin-bottom: 2rem;
    & img {
      width: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 1024px) {
    height: 600px;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    padding-top: 3rem;
  }
`;

export function DescHero() {
  return (
    <>
      <Container>
        <div>
          <p>
            <strong>
              <span>데모 디자인이란?</span>
            </strong>
          </p>
          <div className="texts">
            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="linear"
            >
              단순히 예쁜 디자인이 아니라
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="linear"
            >
              <span>팔리는 전략을 만들어 드립니다.</span>
            </h1>
          </div>
          <p>
            대표님들께서 여기서 상세페이지 만든 제품은 어떻게 매번 잘
            팔리는거냐며 놀리시는 이유입니다.
          </p>
          <div className="scroll">
            <p>주문 폭주하는 상세페이지의 비결이 궁금하신가요?</p>
          </div>
        </div>
        <div>
          <figure>
            <img
              src="https://threedio-cdn.icons8.com/SPc_AsF4xcCRbQLUgc7Mu8M986JrdsUZk3ylqF4No9Y/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzQ0Lzk0Mzcz/NjIwLWQxYTItNDY0/OS05NGExLTM4Zjk2/OTA2Yzg1Yi5wbmc.png"
              alt="이미지"
            />
          </figure>
        </div>
      </Container>
    </>
  );
}
