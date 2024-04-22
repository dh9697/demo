import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  // 이너 패딩
  padding: 10% 0 15% 0;
  & .texts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    & h2 {
      color: var(--global-color-pink);
      font-size: var(--global-typography-color-white-font-size);
    }
    & h1 {
      font-size: var(--global-typography-big-font-size);
      font-family: var(--global-font-bold);
      &.highlight {
        color: var(--global-color-pink);
      }
    }
    & .button {
      display: flex;
      background-color: var(--global-color-pink);
      border-radius: 10px;
      overflow: hidden;
      & .planning-type,
      & .all-in-one {
        color: var(--global-color-white);
        padding: 1rem 1.5rem;
        flex: 1;
        text-align: center;
        text-decoration: none;
        &:hover {
          background-color: var(--global-color-purple);
          color: white;
        }
      }
    }
  }
  & figure {
    & img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export function PricingInformation() {
  // 주소에 따라 button 스타일링
  return (
    <>
      <Container>
        <div className="texts">
          <h2>초과 수요로 인해 매달 T.O가 마감되는 상황을 고려한다면</h2>
          <div>
            <h1>데모 디자인의 제작 비용은</h1>
            <h1 className="highlight">오늘이 가장 저렴합니다.</h1>
          </div>
          <div className="button">
            <NavLink
              to={'/가격안내/기획형-상세페이지'}
              className="planning-type"
            >
              기획형
            </NavLink>
            <NavLink to={'/가격안내/올인원-상세페이지'} className="all-in-one">
              올인원
            </NavLink>
          </div>
        </div>
        <div>
          <figure>
            <img
              src="https://i.pinimg.com/originals/1d/98/9c/1d989c26c84b3277d4159537309651c3.gif"
              alt="이미지"
            />
          </figure>
        </div>
      </Container>
    </>
  );
}
