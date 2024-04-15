import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  position: relative;
  & .containerInnner {
    position: absolute;
    width: calc(100vw - 17px);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    & .consultation {
      background-color: var(--global-color-pink);
      color: var(--global-color-text);
      font-family: var(--global-font-bold);
      & .consultationInner {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        padding: 8% 0;
        & h1 {
          font-size: var(--global-typography-color-text-font-size);
        }
        & p {
          font-size: var(--global-typography-color-text-soft-font-size);
          margin-top: 1.5rem;
        }
        & button {
        }
        @media (max-width: 1024px) {
          flex-direction: column;
          text-align: center;
        }
      }
    }
    & .footer {
      max-width: 1200px;
      margin: 0 auto;
      padding: 38px 0;
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      font-family: var(--global-font);
      color: var(--global-color-text);
      font-size: var(--global-typography-small-font-size);
      & .text-margin {
        margin-right: 1rem;
      }
      & .navLink {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
      }
      @media (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
        & .navLink {
          align-items: start;
        }
      }
    }
  }
`;
const LogoContainer = styled.div`
  display: flex;
  gap: 1rem;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--global-color-pink);
    letter-spacing: -1px;
    line-height: 20px;
    text-shadow: -1px -1px 0 var(--global-color-white),
      1px -1px 0 var(--global-color-white), -1px 1px 0 var(--global-color-white),
      1px 1px 0 var(--global-color-white);
  }
`;
const Logo = styled.div`
  background-image: url('https://img.freepik.com/premium-vector/vector-graphic-of-abstract-flower-logo-nature-beauty-logo-desgn-template_600800-227.jpg?w=826');
  background-repeat: no-repeat;
  background-size: cover;
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

export function Footer() {
  return (
    <>
      <Container>
        <div className="containerInnner">
          <div className="consultation">
            <div className="consultationInner">
              <div>
                <h1>급하게 의뢰하실 필요 없습니다.</h1>
                <p>
                  무료로 제공되는 10만원 상당의 기획안과 1:1맞춤 컨설팅을
                  받아보시고 결정하세요.
                </p>
              </div>
              <button>실시간 무료 상담 진행하기</button>
            </div>
          </div>
          <div className="footer">
            <LogoContainer>
              <Logo></Logo>
              <div>
                <p>Demo</p>
                <p>Design</p>
              </div>
            </LogoContainer>
            <div>
              <p>
                <span className="text-margin">
                  <b>서울특별시 강남구 도산대로 24길 7, 효진빌딩</b>
                </span>
                E-mail <b>prw3761@mail.hongik.ac.kr</b>
              </p>
              <p>
                <span className="text-margin">
                  대표자 <b>박래완</b>
                </span>
                사업자등록번호 <b>572-59-00333</b>
              </p>
              <p>Copyright © 2023 Grthdesignlab. All rights reserved.</p>
            </div>
            <div className="navLink">
              <p>
                <strong>개인정보처리방침</strong>
              </p>
              <navLink>이미지</navLink>
              <navLink>사이트 주소</navLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
