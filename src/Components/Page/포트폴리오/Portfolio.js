import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  font-family: var(--global-font-bold);
  padding: 15% 0;
  color: var(--global-color-white);
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
  & h2 {
    color: var(--global-color-pink);
    font-size: var(--global-typography-color-white-font-size);
  }
  & h1 {
    font-size: var(--global-typography-big-font-size);
  }
  & .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    & figure {
      border: 15px solid var(--global-color-white);
      border-radius: 15px;
      & img {
        width: 100%;
        height: 100%;
        aspect-ratio: 2/3;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 1024px) {
    gap: 3rem;
    & .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      & figure {
        & img {
          aspect-ratio: 4/5;
        }
      }
    }
  }
  @media (max-width: 767px) {
    text-align: center;
    gap: 2rem;
    & .grid {
      grid-template-columns: 1fr;
      gap: 2rem;
      & figure {
        & img {
          aspect-ratio: 3/2;
        }
      }
    }
  }
`;

export function Portfolio() {
  return (
    <>
      <Container>
        <h2>분명 같은 제품인데 대체 왜 저기만 잘 팔리는 거야?</h2>
        <div>
          <h1>결제 버튼을 부르는 데모 디자인의</h1>
          <h1>상세페이지 포트폴리오</h1>
        </div>
        <div className="grid">
          <figure>
            <img
              src="https://i.pinimg.com/originals/35/0b/cf/350bcf758bccd311d450e809a5f7121f.gif"
              alt="포트폴리오"
            />
          </figure>
          <figure>
            <img
              src="https://i.pinimg.com/736x/04/82/ad/0482ad1227e70ed53f7359c742097683.jpg"
              alt="포트폴리오"
            />
          </figure>
          <figure>
            <img
              src="https://i.pinimg.com/564x/7d/d0/c4/7dd0c4c4661a04f24ddae18c0dd7417b.jpg"
              alt="포트폴리오"
            />
          </figure>
          <figure>
            <img
              src="https://i.pinimg.com/564x/16/b8/27/16b827529dddc9454aaaa307f5c743f9.jpg"
              alt="포트폴리오"
            />
          </figure>
          <figure>
            <img
              src="https://i.pinimg.com/564x/5b/70/3d/5b703dcd5360902d36e45cffbc608c90.jpg"
              alt="포트폴리오"
            />
          </figure>
          <figure>
            <img
              src="https://i.pinimg.com/564x/51/d3/8b/51d38b7df0479a3d987bb87e68dbc7fb.jpg"
              alt="포트폴리오"
            />
          </figure>
          <figure>
            <img
              src="https://i.pinimg.com/736x/dc/3c/44/dc3c448b49c2b9c59452e946df0129b1.jpg"
              alt="포트폴리오"
            />
          </figure>
          <figure>
            <img src="" alt="포트폴리오" />
          </figure>
          <figure>
            <img src="" alt="포트폴리오" />
          </figure>
        </div>
      </Container>
    </>
  );
}
