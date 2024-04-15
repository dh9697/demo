import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Container = styled.div`
  position: relative;
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
  font-family: var(--global-font-bold);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 1rem;
  & p {
    color: var(--global-color-pink);
    font-size: var(--global-typography-color-pink-font-size);
  }
  & h1 {
    color: var(--global-color-white);
    font-size: var(--global-typography-color-text-font-size);
  }
  & div {
    width: 100%;
  }
`;
const StyledSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--global-color-white);
    width: 0;
    top: 45%;
    font-weight: 900;
    &:after {
      font-size: 20px;
    }
  }

  .swiper-pagination-bullet {
    background-color: var(--global-color-pink);
  }
  .swiper-pagination-bullet-active {
    background-color: var(--global-color-pink);
  }
  .swiper-scollbar {
    display: none;
  }
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  & figure {
    border: 5px solid var(--global-color-pink);
    border-radius: 5px;
    margin: 1rem 2rem 5rem;
    object-fit: cover;
    aspect-ratio: 5/6;
    overflow: hidden;
    & img {
      width: 100%;
    }
  }
`;

export function CommentSwiper() {
  return (
    <>
      <Container>
        <p
          data-aos="fade-down"
          data-aos-duration="400"
          data-aos-easing="linear"
        >
          매일 쏟아지는 찐후기
        </p>
        <h1
          data-aos="fade-down"
          data-aos-duration="400"
          data-aos-easing="linear"
        >
          고객 후기로 증명합니다.
        </h1>
        <div
          data-aos="fade-down"
          data-aos-duration="400"
          data-aos-easing="linear"
        >
          <StyledSwiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: { slidesPerView: 3 },
              767: { slidesPerView: 2 },
            }}
          >
            <StyledSwiperSlide>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/1a/76/ad/1a76ad4102aeb9fcb6c314b43c9ceb2c.jpg"
                  alt="후기이미지"
                />
              </figure>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/a3/d6/0f/a3d60f312be8ba6141a31339b995f21f.jpg"
                  alt="후기이미지"
                />
              </figure>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/d4/01/6b/d4016b47a6f7a27e4232a1a0a36eb2a6.jpg"
                  alt="후기이미지"
                />
              </figure>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <figure>
                <img
                  src="https://i.pinimg.com/736x/cc/71/e5/cc71e5297349011a47cfae4d32986107.jpg"
                  alt="후기이미지"
                />
              </figure>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <figure>
                <img
                  src="https://i.pinimg.com/564x/c9/ed/66/c9ed66fa01eabbf3c519bf6dc1fae94a.jpg"
                  alt="후기이미지"
                />
              </figure>
            </StyledSwiperSlide>
          </StyledSwiper>
        </div>
      </Container>
    </>
  );
}
