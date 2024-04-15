import styled, { keyframes } from 'styled-components';
const flowPortfolio = keyframes`
0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  & .texts {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    & h1 {
      font-family: var(--global-font-bold);
      font-size: var(--global-typography-color-text-font-size);
      & span {
        color: var(--global-color-pink);
      }
    }
  }
  & .containerInner {
    position: absolute;
    width: calc(100vw - 17px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & .flow-portfolio {
      overflow: hidden;
      display: flex;
      margin: 0 1rem;
      & .track,
      & .track2 {
        animation: ${flowPortfolio} 25s linear infinite;
        display: flex;
        gap: 1rem;
        margin: 0 0.5rem;
        & figure {
          width: 400px;
          border: 5px solid var(--global-color-pink);
          border-radius: 5px;
          @media (max-width: 1024px) {
            width: 300px;
          }

          & img {
            width: 100%;
            height: 100%;
            aspect-ratio: 2/3;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

export function PortfolioSwiper() {
  return (
    <>
      <Container>
        <div
          className="texts"
          data-aos="fade-down"
          data-aos-duration="400"
          data-aos-easing="linear"
        >
          <h1>
            데모디자인의 <span>매출 상승 포트폴리오</span>는
          </h1>
          <h1>지금 이 순간에도 끊임없이 추가되고 있습니다.</h1>
        </div>
        <div className="containerInner">
          <div className="flow-portfolio">
            <div className="track">
              <figure>
                <img
                  src="https://i.pinimg.com/originals/35/0b/cf/350bcf758bccd311d450e809a5f7121f.gif"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/736x/04/82/ad/0482ad1227e70ed53f7359c742097683.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/7d/d0/c4/7dd0c4c4661a04f24ddae18c0dd7417b.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/16/b8/27/16b827529dddc9454aaaa307f5c743f9.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/5b/70/3d/5b703dcd5360902d36e45cffbc608c90.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/51/d3/8b/51d38b7df0479a3d987bb87e68dbc7fb.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/736x/dc/3c/44/dc3c448b49c2b9c59452e946df0129b1.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
            </div>
            <div className="track2">
              <figure>
                <img
                  src="https://i.pinimg.com/originals/35/0b/cf/350bcf758bccd311d450e809a5f7121f.gif"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/736x/04/82/ad/0482ad1227e70ed53f7359c742097683.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/7d/d0/c4/7dd0c4c4661a04f24ddae18c0dd7417b.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/16/b8/27/16b827529dddc9454aaaa307f5c743f9.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/5b/70/3d/5b703dcd5360902d36e45cffbc608c90.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/16/b8/27/16b827529dddc9454aaaa307f5c743f9.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
              <figure>
                <img
                  src="https://i.pinimg.com/736x/dc/3c/44/dc3c448b49c2b9c59452e946df0129b1.jpg"
                  alt="포트폴리오 이미지"
                />
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
