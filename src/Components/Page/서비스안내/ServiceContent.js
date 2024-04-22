import styled from 'styled-components';

const Container = styled.div`
  & .section {
    display: flex;
    padding: 10% 0;
    gap: 5rem;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    & .texts {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      & h2 {
        font-size: var(--global-typography-color-text-soft-font-size);
        color: var(--global-color-pink);
        font-family: var(--global-font-bold);
      }
      & h1 {
        font-size: var(--global-typography-medium-font-size);
        font-family: var(--global-font-bold);
      }
      & p {
        font-family: var(--global-font);
        padding: 0.5rem 0;
        color: var(--global-color-text-soft);
      }
    }
    & .img {
      flex: 1;
      display: flex;
      align-items: center;
      & figure {
        & img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
  @media (max-width: 767px) {
    & .section {
      flex-direction: column;
      &:nth-child(even) {
        flex-direction: column;
      }
      & .texts {
        & p {
          padding: 4px 0;
        }
      }
    }
  }
`;

export function ServiceContent() {
  return (
    <>
      <Container>
        <div className="section">
          <div
            className="texts"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <h2>POINT 01.</h2>
            <div>
              <h1>뇌피셜로 기획하지 않습니다.</h1>
              <h1>검증된 심리학 기반 전략을 사용합니다.</h1>
            </div>
            <div>
              <p>
                <strong>평균 상세페이지 체류시간 3초.</strong>
              </p>
              <p>치열한 온라인 시장에서 남들과 비슷한</p>
              <p>그저 그런 기획으로 살아남을 수 없습니다.</p>
            </div>
            <div>
              <p>이미 성과로 검증된 데모디자인의 전략으로</p>
              <p>매출로 직결되는 카피라이팅을 기획합니다.</p>
            </div>
          </div>
          <div className="img">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/minimalist-linear-scenes-storyboard_742173-7984.jpg?t=st=1713334336~exp=1713337936~hmac=d5662da6664fa2ffc79a3270974fdc13829880acba1b28a501ecd499d19d5a70&w=740"
                alt="이미지"
              />
            </figure>
          </div>
        </div>
        <div className="section">
          <div
            className="texts"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <h2>POINT 02.</h2>
            <div>
              <h1>퀄리티 유지를 위해 매월 30건</h1>
              <h1>한정된 프로젝트만 진행합니다.</h1>
            </div>
            <div>
              <p>
                <strong>템플릿으로 만드는 박리다매식 디자인이 아닙니다.</strong>
              </p>
              <p>
                그로스 디자인랩은 고객사의 제품에 맞는 기획형 상세페이지를
                제작합니다.
              </p>
              <p>그저 그런 기획으로 살아남을 수 없습니다.</p>
            </div>
            <div>
              <p>그렇기에 퀄리티 유지를 위해</p>
              <p>매달 한정된 프로젝트만 진행하고 있습니다.</p>
            </div>
          </div>
          <div className="img">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/minimalist-linear-scenes-storyboard_742173-7984.jpg?t=st=1713334336~exp=1713337936~hmac=d5662da6664fa2ffc79a3270974fdc13829880acba1b28a501ecd499d19d5a70&w=740"
                alt="이미지"
              />
            </figure>
          </div>
        </div>
        <div className="section">
          <div
            className="texts"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <h2>POINT 03.</h2>
            <div>
              <h1>불필요한 추가 비용 없이</h1>
              <h1>100% 정찰제로 운영합니다.</h1>
            </div>
            <div>
              <p>
                <strong>
                  과한 옵션들은 오히려 상세페이지를 망칠 수 있습니다.
                </strong>
              </p>
              <p>거품 없이 필요한 요소만 포함해 정찰제 옵션을 구성했습니다.</p>
            </div>
            <div>
              <p>심지어 대표님께서 추가를 요청해주신 사항이라도</p>
              <p>불필요하다 판단될 경우 제외할 것을 제안드립니다.</p>
            </div>
          </div>
          <div className="img">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/minimalist-linear-scenes-storyboard_742173-7984.jpg?t=st=1713334336~exp=1713337936~hmac=d5662da6664fa2ffc79a3270974fdc13829880acba1b28a501ecd499d19d5a70&w=740"
                alt="이미지"
              />
            </figure>
          </div>
        </div>
        <div className="section">
          <div
            className="texts"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <h2>POINT 04.</h2>
            <div>
              <h1>무제한 수정 · 불만족 시 100% 환불</h1>
              <h1>안심 보장 제도를 운영합니다.</h1>
            </div>
            <div>
              <p>
                <strong>
                  그로스 디자인랩은 무책임하게 작업을 끝내지 않습니다.
                </strong>
              </p>
              <p>사소한 워딩 하나, 이미지 하나까지 모두 만족하실 때까지</p>
              <p>무제한 수정을 제공합니다.</p>
            </div>
            <div>
              <p>
                또한, 개선의 여지가 없다고 판단하실 경우 100% 환불을 보장합니다.
              </p>
              <p>그럼에도 지금까지 불만족 환불 비율은 0.1% 미만이었습니다.</p>
            </div>
          </div>
          <div className="img">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/minimalist-linear-scenes-storyboard_742173-7984.jpg?t=st=1713334336~exp=1713337936~hmac=d5662da6664fa2ffc79a3270974fdc13829880acba1b28a501ecd499d19d5a70&w=740"
                alt="이미지"
              />
            </figure>
          </div>
        </div>
      </Container>
    </>
  );
}
