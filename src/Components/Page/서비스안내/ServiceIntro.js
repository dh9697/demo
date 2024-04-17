import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 15% 0;
  color: var(--global-color-white);
  display: flex;
  flex-direction: column;
  gap: 5rem;
  font-family: var(--global-font);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: calc(100vw - 17px);
    transform: translateX(-50%);
    height: 100%;
    z-index: -10;
    background-color: var(--global-color-text);
  }
  & .texts {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    & p {
      font-size: var(--global-typography-color-white-font-size);
      color: var(--global-color-pink);
      font-weight: 900;
    }
    & h1 {
      font-family: var(--global-font-bold);
      font-size: var(--global-typography-big-font-size);
    }
  }
  & .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    & .grid-item {
      display: grid;
      grid-template-rows: 2fr 1fr 3fr;
      & h2 {
        font-size: var(--global-typography-color-text-soft-font-size);
      }
      & p {
        font-size: var(--global-typography-small-font-size);
        color: #adb6be;
      }
      & .card {
        background-color: #78716c;
        padding: 2rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        border-radius: 15px;
        text-align: center;
        &.border {
          background-color: var(--global-color-white);
          border: 5px solid var(--global-color-pink);
          border-radius: 15px;
          color: var(--global-color-text);
          & h2 {
            color: var(--global-color-pink);
          }
          & p {
            color: var(--global-color-text);
          }
        }
      }
      & .bar {
        position: relative;
        width: 3px;
        height: 100%;
        top: 0;
        left: 50%;
        background: linear-gradient(180deg, #5c5c5c 0%, #fff 95%);
      }
    }
  }
  @media (max-width: 767px) {
    & .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 5rem;
      & .grid-item {
        display: grid;
        grid-template-rows: 3fr 1fr 3fr;
      }
    }
  }
`;

export function ServiceIntro() {
  return (
    <>
      <Container>
        <div className="texts">
          <p>기획형 상세페이지 서비스 안내</p>
          <div>
            <h1
              data-aos="fade-down"
              data-aos-duration="400"
              data-aos-easing="linear"
            >
              디자인만 보고 업체를 선정하셨다면
            </h1>
            <h1
              data-aos="fade-down"
              data-aos-duration="400"
              data-aos-easing="linear"
            >
              심각한 문제입니다.
            </h1>
          </div>
        </div>
        <div className="grid">
          <div className="grid-item">
            <div className="card">
              <div>
                <h2>정말 설득력 있게 만들 수 있을까?</h2>
              </div>
              <div>
                <p>정말 우리 제품과 고객에 대해</p>
                <p>이해하고 기획할 수 있을까?</p>
              </div>
            </div>
            <div className="bar"></div>
            <div
              className="card border"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-easing="linear"
            >
              <div>
                <h2>뇌피셜로 기획하지 않습니다.</h2>
              </div>
              <div>
                <p>
                  전문 기획팀이 이미 성과가 검증된 심리학에 기반한 전략을 사용해
                  기획합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <div>
                <h2>찍어내듯 만든 결과물이</h2>
                <h2>나오면 어쩌지?</h2>
              </div>
              <div>
                <p>어디서나 볼 법한 그저 그런 경쟁력 없는</p>
                <p>상세페이지는 필요 없는데..</p>
              </div>
            </div>
            <div className="bar"></div>
            <div
              className="card border"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-easing="linear"
            >
              <div>
                <h2>매월 30건, 한정된</h2>
                <h2>프로젝트만 진행합니다.</h2>
              </div>
              <div>
                <p>1:1 맞춤 기획형 상세페이지 제작을 위해</p>
                <p>한 달 30건 TO 제한을 두고</p>
                <p>운영하고 있습니다.</p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <div>
                <h2>바가지 쓰는거 아니야?</h2>
              </div>
              <div>
                <p>정해진 가격표가 없네..</p>
                <p>금액이 과도하게 책정되거나</p>
                <p>불필요한 옵션이 추가되진 않을까?</p>
              </div>
            </div>
            <div className="bar"></div>
            <div
              className="card border"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-easing="linear"
            >
              <div>
                <h2>추가 비용 없이 100%</h2>
                <h2>정찰제로 운영합니다.</h2>
              </div>
              <div>
                <p>걱정하지 마세요. 그로스 디자인랩은</p>
                <p>100% 정찰제로 운영되며 사전 협의 없이</p>
                <p>추가비용을 청구하지 않습니다.</p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <div>
                <h2>결과물이 마음에</h2>
                <h2>안 들면 어쩌지?</h2>
              </div>
              <div>
                <p>내 생각과 다르게 결과물이 나와도</p>
                <p>그냥 참고 사용해야 되는 걸까..?</p>
              </div>
            </div>
            <div className="bar"></div>
            <div
              className="card border"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-easing="linear"
            >
              <div>
                <h2>안심 보장 제도를</h2>
                <h2>운영합니다.</h2>
              </div>
              <div>
                <p>함께 고민하며 원하는 결과물이</p>
                <p>나올 때까지 무제한 수정을 제공합니다.</p>
                <p>개선의 여지가 없다고 판단될 시</p>
                <p>100% 환불을 약속합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
