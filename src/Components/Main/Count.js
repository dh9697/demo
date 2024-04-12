import styled from 'styled-components';
import count1 from '../../image/count1.png';
import count2 from '../../image/count2.png';
import count3 from '../../image/count3.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--global-font);
  height: 100vh;
  gap: 2rem;
  padding-top: 2rem;
  & .texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  & p {
    font-size: var(--global-typography-color-text-soft-font-size);
    font-weight: 900;
    color: var(--global-color-text-soft);
  }
  & h1 {
    font-size: var(--global-typography-color-text-font-size);
    color: var(--global-color-text);
    font-family: var(--global-font-bold);
    text-align: center;
  }
`;
const Boxs = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & .box {
    border-radius: 10px;
    box-shadow: 0 5px 5px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .countTag {
      padding: 10px 25px;
      margin: 1rem 0;
      font-size: 1rem;
      border-radius: 20px;
      background-color: var(--global-color-pink);
      color: white;
    }
    & .counting {
      font-size: 60px;
      padding: 0.5rem 0;
    }
    & figure {
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
export function Count() {
  return (
    <>
      <Container>
        <div
          className="texts"
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="400"
          data-aos-easing="linear"
        >
          <p>조기마감 주의!</p>
          <div>
            <h1>매달 조기 마감되는 T.O와</h1>
            <h1>문의 폭주에는 다 이유가 있습니다.</h1>
          </div>
        </div>
        <Boxs>
          <div className="box">
            <figure>
              <img src={count1} alt="작업건수 이미지" />
            </figure>
            <p className="countTag">누적 작업건수</p>
            <h1 className="counting">
              320<span>+</span>
            </h1>
          </div>
          <div className="box">
            <figure>
              <img src={count2} alt="고객만족도 이미지" />
            </figure>
            <p className="countTag">고객 만족도</p>
            <h1 className="counting">
              98<span>%</span>
            </h1>
          </div>
          <div className="box">
            <figure>
              <img src={count3} alt="재구매율 이미지" />
            </figure>
            <p className="countTag">재구매율</p>
            <h1 className="counting">
              92<span>%</span>
            </h1>
          </div>
        </Boxs>
      </Container>
    </>
  );
}
