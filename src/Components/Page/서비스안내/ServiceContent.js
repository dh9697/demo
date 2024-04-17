import styled from 'styled-components';

const Container = styled.div`
  & .section {
    display: flex;
    padding: 10% 0;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    & .texts {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      & h2 {
        font-size: var();
        color: var(--global-color-pink);
      }
      & h1 {
        font-size: var();
      }
      & p {
        font-family: var(--global-font);
      }
    }
    & .img {
      flex: 1;
      & figure {
        & img {
          width: 100%;
          object-fit: cover;
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
          <div className="texts">
            <h2>POINT 01.</h2>
            <div>
              <h1>뇌피셜로 기획하지 않습니다.</h1>
              <h1>검증된 심리학 기반 전략을 사용합니다.</h1>
            </div>
            <div>
              <p>평균 상세페이지 체류시간 3초</p>
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
          <div className="texts">
            <h2>POINT 01.</h2>
            <div>
              <h1>뇌피셜로 기획하지 않습니다.</h1>
              <h1>검증된 심리학 기반 전략을 사용합니다.</h1>
            </div>
            <div>
              <p>평균 상세페이지 체류시간 3초</p>
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
          <div className="texts">
            <h2>POINT 01.</h2>
            <div>
              <h1>뇌피셜로 기획하지 않습니다.</h1>
              <h1>검증된 심리학 기반 전략을 사용합니다.</h1>
            </div>
            <div>
              <p>평균 상세페이지 체류시간 3초</p>
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
          <div className="texts">
            <h2>POINT 01.</h2>
            <div>
              <h1>뇌피셜로 기획하지 않습니다.</h1>
              <h1>검증된 심리학 기반 전략을 사용합니다.</h1>
            </div>
            <div>
              <p>평균 상세페이지 체류시간 3초</p>
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
      </Container>
    </>
  );
}
