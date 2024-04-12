import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 82.39px);
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  font-family: var(--global-font);
  color: var(--global-color-text);
  & h1 {
    font-family: var(--global-font-bold);
    font-size: var(--global-typography-color-text-font-size);
  }
  & h2 {
    font-size: var(--global-typography-color-text-soft-font-size);
  }
  & .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    & .grid-items {
      border-top: 2px solid var(--global-color-pink);
      border-bottom: 2px solid var(--global-color-pink);
      padding: 2rem 0;
      & .grid-index,
      .grid-index-name {
        color: var(--global-color-pink);
        font-size: var(--global-typography-color-pink-font-size);
      }
      & .grid-index-name {
        padding: 2rem 0;
      }
      & p {
        color: var(--global-color-text-soft);
        & span {
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    & .grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }
  }
  @media (max-width: 767px) {
    height: 100%;
    gap: 2rem;
    & .grid {
      grid-template-columns: repeat(1, 1fr);
      gap: 0;
      & .grid-items {
        border-bottom: 0;
      }
      & .grid-items:last-child {
        border-bottom: 2px solid var(--global-color-pink);
      }
    }
  }
`;
export function ProductionProcess() {
  return (
    <>
      <Container>
        <h1
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="400"
          data-aos-easing="linear"
        >
          체계적인 제작 과정
        </h1>
        <h2
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="400"
          data-aos-easing="linear"
        >
          제품만 준비해주시면 상세페이지는 저희가 모두 책임지겠습니다.
        </h2>
        <div className="grid">
          <div className="grid-items">
            <h2 className="grid-index">01.</h2>
            <h2 className="grid-index-name">문의서 작성</h2>
            <div>
              <p>상세한 상담 진행을 위해</p>
              <p>문의서를 작성해 주세요.</p>
            </div>
          </div>
          <div className="grid-items">
            <h2 className="grid-index">02.</h2>
            <h2 className="grid-index-name">기획 상담 및 결제</h2>
            <div>
              <p>의뢰서를 바탕으로 기획 상담이 진행됩니다.</p>
              <p>
                * 시장 분석서 <span>무료 제공</span>
              </p>
            </div>
          </div>
          <div className="grid-items">
            <h2 className="grid-index">03.</h2>
            <h2 className="grid-index-name">기획안 작성</h2>
            <p>기획안 작성 후 피드백을 토대로 수정이 진행됩니다.</p>
          </div>
          <div className="grid-items">
            <h2 className="grid-index">04.</h2>
            <h2 className="grid-index-name">디자인</h2>
            <div>
              <p>디자인 작업이 진행됩니다.</p>
              <p>기간은 7-10일 소요됩니다.</p>
            </div>
          </div>
          <div className="grid-items">
            <h2 className="grid-index">05.</h2>
            <h2 className="grid-index-name">피드백 및 수정</h2>
            <div>
              <p>피드백 후 만족할 때까지</p>
              <p>
                <span>무제한 수정</span>에 들어갑니다.
              </p>
            </div>
          </div>
          <div className="grid-items">
            <h2 className="grid-index">06.</h2>
            <h2 className="grid-index-name">완성</h2>
            <div>
              <p>완성된 이미지 파일 및</p>
              <p>원본 파일을 전달합니다.</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
