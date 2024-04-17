import Aos from 'aos';
import { useEffect } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  color: var(--global-color-text);
  font-family: var(--global-font-bold);
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  padding: 7rem 0;
  & h3 {
    text-decoration: underline;
    color: var(--global-color-pink);
    font-size: var(--global-typography-color-white-font-size);
  }
  & h1 {
    margin: 2rem 0 4rem;
    font-size: var(--global-typography-medium-font-size);
  }
  & .textsBox {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: var(--global-font);
    font-size: var(--global-typography-small-font-size);
    & div {
      line-height: 25px;
    }
  }
  & .border {
    border: 10px solid var(--global-color-pink);
    border-radius: 10px;
    background-color: var(--global-color-text);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & figure {
      width: 80%;
      & img {
        width: 100%;
      }
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 4rem;
    & .border {
      padding: 10% 0;
      & figure {
        width: 200px;
        & img {
          width: 100%;
        }
      }
    }
  }
`;
export function DescContent1() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Container>
        <div>
          <h3
            data-aos="fade-down"
            data-aos-duration="400"
            data-aos-easing="linear"
          >
            유통 브랜드를 직접 운영하며 생각했습니다.
          </h3>
          <h1
            data-aos="fade-down"
            data-aos-duration="400"
            data-aos-easing="linear"
          >
            왜 상세페이지를 그렇게 밖에 못만들까?
          </h1>
          <div className="textsBox">
            <p>
              <strong>안녕하세요 대표님, 데모디자인 대표 아무개입니다.</strong>
            </p>
            <p>상세페이지 제작 때문에 고민이신가요?</p>
            <div>
              <p>
                온라인 유통업을 하시는 분들이라면 누구나 상세페이지에 대한
                고민이 많으실 겁니다.
              </p>
              <p>
                직접 제작하게 되면 퀄리티가 떨어져 보이고, 인하우스 디자이너를
                구하기엔 부담이고..
              </p>
              <p>
                그러다 보니 외부 업체를 많이 이용하고 계실 겁니다. 그런데
                어떠셨나요? 결과물에 만족하셨나요?
              </p>
            </div>
            <div>
              <p>
                아마 디자인은 괜찮더라도 카피라이팅이나 구성 등에서 설득력이
                많이 떨어진다고 느끼셨을 겁니다.
              </p>
              <p>
                직접 제품을 기획 및 판매해본 경험이 없는 디자이너가 대부분이기에
                당연한 일이라고 생각합니다.
              </p>
              <p>
                저도 온라인 쇼핑몰을 운영한 경험이 있어 풀리지 않는 이 고민에
                대해 잘 알고 있습니다.
              </p>
            </div>
            <div>
              <p>
                <strong>
                  업무량이 늘어나면서 처음 상세페이지를 의뢰했을 때,
                </strong>
              </p>
              <p>
                <strong>결과물은 그야말로 충격 그 자체였습니다.</strong>
              </p>
            </div>
            <div>
              <p>
                ‘디자인은 깔끔하게 잘 하긴 했는데.. 후킹되는 포인트가 전혀
                없네?’
              </p>
              <p>
                ‘사업에 대한 이해가 부족해서 그런가? 기획에 부족한 점이 많이
                보이네..’
              </p>
              <p>
                ‘왜 자꾸 색감과 폰트 같은 디자인 요소에 집착할까? 기획력만
                좋다면 디자인은 평균만 해도 괜찮은데..’
              </p>
            </div>
          </div>
        </div>
        <div className="border">
          <figure>
            <img
              src="https://maxst.icons8.com/vue-static/threedio/errors/not-found.png"
              alt="이미지"
            />
          </figure>
        </div>
      </Container>
    </>
  );
}
