import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 15% 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & h2 {
    color: var(--global-color-pink);
    font-size: var(--global-typography-color-white-font-size);
  }
  & h1 {
    font-family: var(--global-font-bold);
    font-size: var(--global-typography-big-font-size);
    &.highlight {
      color: var(--global-color-pink);
    }
  }
  & .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    & .grid-item {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      text-decoration: none;
      & figure {
        width: 100%;
        border-radius: 15px;
        overflow: hidden;
        & img {
          width: 100%;
          object-fit: cover;
          aspect-ratio: 5/4;
        }
      }
      & .date {
        color: var(--global-color-pink);
        font-size: var(--global-typography-small-font-size);
      }
      & .title {
        color: var(--global-color-text);
      }
    }
  }
  @media (max-width: 1024px) {
    & .grid {
      grid-template-columns: repeat(2, 1fr);
      & .grid-item {
        & figure {
          & img {
            aspect-ratio: 3/2;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    text-align: center;
    & .grid {
      grid-template-columns: 1fr;
      gap: 5rem;
      & .grid-item {
        & figure {
          & img {
            aspect-ratio: 4/1;
          }
        }
        & .date,
        & .title {
          text-align: start;
        }
      }
    }
  }
`;
export function Column() {
  return (
    <>
      <Container>
        <h2>이렇게 해도 되나 싶지만..</h2>
        <div className="texts">
          <h1>데모 디자인의</h1>
          <h1 className="highlight">기획 비결을 모두 공개합니다.</h1>
        </div>
        <div className="grid">
          <NavLink to={'/title에-따라'} className="grid-item">
            <figure>
              <img
                src="https://i.pinimg.com/564x/8a/7e/93/8a7e93628986b924dcc8e20f32510dbe.jpg"
                alt="칼럼이미지"
              />
            </figure>
            <p className="date">2024-02-08</p>
            <h2 className="title">데모 디자인이 만들면 왜 매출이 오를까?</h2>
          </NavLink>
          <NavLink to={'/title에-따라'} className="grid-item">
            <figure>
              <img
                src="https://i.pinimg.com/564x/8a/7e/93/8a7e93628986b924dcc8e20f32510dbe.jpg"
                alt="칼럼이미지"
              />
            </figure>
            <p className="date">2024-02-08</p>
            <h2 className="title">데모 디자인이 만들면 왜 매출이 오를까?</h2>
          </NavLink>
        </div>
      </Container>
    </>
  );
}
