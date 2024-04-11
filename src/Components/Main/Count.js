import styled from 'styled-components';
import count1 from '../../image/count1.png';
import count2 from '../../image/count2.png';
import count3 from '../../image/count3.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Boxs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & .box {
    padding: 1rem 5rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & figure {
      width: 200px;
      height: 200px;
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
        <p>조기마감 주의!</p>
        <h1>매달 조기 마감되는 T.O와</h1>
        <h1>문의 폭주에는 다 이유가 있습니다.</h1>
        <Boxs>
          <div className="box">
            <figure>
              <img src={count1} alt="작업건수 이미지" />
            </figure>
            <p>누적 작업건수</p>
            <h1>320+</h1>
          </div>
          <div className="box">
            <figure>
              <img src={count2} alt="고객만족도 이미지" />
            </figure>
            <p>고객 만족도</p>
            <h1>98%</h1>
          </div>
          <div className="box">
            <figure>
              <img src={count3} alt="재구매율 이미지" />
            </figure>
            <p>재구매율</p>
            <h1>92%</h1>
          </div>
        </Boxs>
      </Container>
    </>
  );
}
