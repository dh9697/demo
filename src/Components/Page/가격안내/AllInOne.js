import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: calc(100vw - 17px);
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--global-color-lightpink);
    z-index: -10;
  }
  & p {
    font-size: 14px;
    color: var(--global-color-lightgray);
    &.highlight {
      color: var(--global-color-pink);
      font-weight: 900;
    }
    &.bold {
      font-weight: 900;
    }
  }
  & h1 {
    font-size: var(--global-typography-color-pink-font-size);
  }
  & h3 {
    font-size: var(--global-typography-color-white-font-size);
    &.highlight {
      color: var(--global-color-gray);
    }
  }
  & h2 {
    color: white;
    font-size: var(--global-typography-color-white-font-size);
  }
  & .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 80px 0;
    gap: 2rem;
    & .grid-item {
      background-color: white;
      border-radius: 15px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & .grid-item-texts {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        & .header {
          display: grid;
          grid-template-columns: 2fr 1fr;
          align-items: center;
          & .header-texts {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          & figure {
            & img {
              width: 100%;
              object-fit: cover;
            }
          }
        }
        & .content-title {
          line-height: 26px;
        }
        & .content {
          line-height: 24px;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    & .grid {
      grid-template-columns: 1fr;
      & .grid-item {
        & .header {
          & figure {
            width: 100px;
            height: 100px;
            justify-self: end;
          }
        }
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  padding: 1rem 0;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
  background-color: var(--global-color-pink);
  margin-top: 2rem;
`;

export function AllInOne() {
  return (
    <>
      <Container>
        <div className="grid">
          <div className="grid-item">
            <div className="grid-item-texts">
              <div className="header">
                <div className="header-texts">
                  <p className="highlight">DELUXE</p>
                  <h1>맞춤 올인원 상세페이지</h1>
                  <p className="highlight">[전문 기획 + 디자인 + 촬영]</p>
                </div>
                <figure>
                  <img
                    src="https://threedio-cdn.icons8.com/m-hcAV57XFDzprJa5Cmu1uthSbV5PQK0MTbZCT56o9E/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzQ2L2EzZGIw/N2MxLTZhOWEtNGRh/NC1iOTY5LTlkYWE5/NmY5NTMyNS5wbmc.png"
                    alt="camera"
                  />
                </figure>
              </div>
              <div className="content-title">
                <h3>브랜딩팀 [기획팀 + 디자인팀]</h3>
                <h3 className="highlight">세로 25,000px 길이 기준</h3>
              </div>
              <div className="content">
                <p>– 기획 내용에 기반해 필요한 사진을 촬영합니다.</p>
                <p>– 자사, 경쟁사, 고객 3중 분석을 통해 기획합니다.</p>
                <p>– 심리학을 바탕으로 고객 설득 여정을 설계합니다.</p>
                <p>– 제공되는 기획안은 추후 마케팅 소재로도 활용 가능합니다.</p>
                <p>– 브랜드 아이덴티티를 살려 디자인을 설계합니다.</p>
                <p>– 경쟁사를 분석해 차별화 요소를 더해 디자인합니다.</p>
                <p>
                  – 초안을 전달드린 뒤, 피드백을 거쳐 수정 작업을 진행합니다.
                </p>
                <p>– 최종 컨펌 이후 최종본과 PSD 원본을 제공합니다.</p>
              </div>
            </div>
            <StyledNavLink>
              <h2>₩ 1,100,000</h2>
            </StyledNavLink>
          </div>
          <div className="grid-item">
            <div className="grid-item-texts">
              <div className="header">
                <div className="header-texts">
                  <p className="highlight">PREMIUM</p>
                  <h1>초격차 올인원 상세페이지</h1>
                  <p className="highlight">[전문 기획 + 디자인 + 촬영]</p>
                </div>
                <figure>
                  <img
                    src="https://threedio-cdn.icons8.com/m-hcAV57XFDzprJa5Cmu1uthSbV5PQK0MTbZCT56o9E/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzQ2L2EzZGIw/N2MxLTZhOWEtNGRh/NC1iOTY5LTlkYWE5/NmY5NTMyNS5wbmc.png"
                    alt="camera"
                  />
                </figure>
              </div>
              <div className="content-title">
                <h3>초격차팀 [대표 + 기획팀 + 디자인팀]</h3>
                <h3 className="highlight">세로 길이 무제한</h3>
              </div>
              <div className="content">
                <p className="bold">
                  – 제품의 본질이 좋지 않으면 작업 진행이 어려울 수 있습니다.
                </p>
                <p className="bold">
                  – 대형 브랜드 기획 컨설팅을 하는 대표가 직접 기획을
                  진행합니다.
                </p>
                <p className="bold">
                  – 대표와 직접 1:1로 소통하며 기획을 진행합니다.
                </p>
                <p>– 오직 초격차 서비스에만 제공되는 분석서가 제공됩니다.</p>
                <p>– 기획 내용에 기반해 필요한 사진을 촬영합니다.</p>
                <p>– 자사, 경쟁사, 고객 3중 분석을 통해 기획합니다.</p>
                <p>– 심리학을 바탕으로 고객 설득 여정을 설계합니다.</p>
                <p>– 제공되는 기획안은 추후 마케팅 소재로도 활용 가능합니다.</p>
                <p>– 브랜드 아이덴티티를 살려 디자인을 설계합니다.</p>
                <p>– 경쟁사를 분석해 차별화 요소를 더해 디자인합니다.</p>
                <p>
                  – 초안을 전달드린 뒤, 피드백을 거쳐 수정 작업을 진행합니다.
                </p>
                <p>– 최종 컨펌 이후 최종본과 PSD 원본을 제공합니다.</p>
              </div>
            </div>
            <StyledNavLink>
              <h2>₩ 1,650,000</h2>
            </StyledNavLink>
          </div>
        </div>
      </Container>
    </>
  );
}
