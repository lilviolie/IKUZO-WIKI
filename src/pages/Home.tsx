import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../components/common/Header';
import bcImg from '../assets/Home-bcimage.jpg';
import slide1 from '../assets/slide_1.jpg';
import slide2 from '../assets/slide_2.jpg';
import slide3 from '../assets/slide_3.jpg';

const HomeWrapper = styled.div`
  position: relative;
`;

const HomeBackground = styled.div`
  position: relative;
  overflow: hidden;
`;

const HomeBgImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const HomeBgImageCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3f3f3f;
  opacity: 0.6;
`;

const HomeInner = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  text-align: center;
  color: white;
  transform: translate(-50%, -50%);
`;

const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  text-align: left;
`;

const HomeTextSubtitle = styled.div`
  padding-bottom: 0.7rem;
  font-size: 1.1rem;
  color: var(--color-primary);
`;

const HomeTextTitle = styled.div`
  padding-bottom: 1rem;
  font-size: 2.6rem;
  font-weight: 700;
  span {
    color: var(--color-primary);
  }
`;

const HomeTextDescription = styled.div`
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const HomeTextBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HomeTextBtnLeft = styled.button`
  padding: 0.6rem 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 2rem;
  background-color: #ffd12c;
  color: var(--color-black);
  font-weight: 700;
  transition: 0.5s;

  &:hover {
    /* Add hover styles here */
    background-color: #ffe68a;
    color: var(--color-black);
  }
`;

const HomeTextBtnRight = styled.button`
  margin-left: 1rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 2rem;
  background-color: transparent;
  color: var(--color-primary);
  font-weight: 700;
  transition: 0.5s;

  &:hover {
    /* Add hover styles here */
    background-color: #ffe68a;
    color: var(--color-black);
  }
`;

const HomeSwiper = styled.div`
  width: 50%;
  margin-left: 5rem;
  position: relative;
  padding: 0.2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
`;

const HomeSwiperFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: none;
  z-index: 1;
`;

const HomePage = () => {
  return (
    <HomeWrapper className="home">
      <Header />
      <HomeBackground className="home__background">
        <HomeBgImage
          className="home__bgImg"
          src={bcImg}
          alt="bcImg"
        />
        <HomeBgImageCover className="home__bgImg--cover" />
      </HomeBackground>
      <HomeInner className="home__inner">
        <HomeText className="homeText">
          <HomeTextSubtitle className="homeText__subtitle">
            IKUZO MAIN NEWS
          </HomeTextSubtitle>
          <HomeTextTitle className="homeText__title">
            2023 <span>가을 맛집 탐방 </span> 정모
          </HomeTextTitle>
          <HomeTextDescription className="homeText__description">
            2023년 9월 11일일 강남 페스트캠퍼스에서 진행된 가을 야유회로 모든
            팀원들이 만나는 만남의 장이 열렸다. 해당 만남의 장에서 많은 팀들은
            자유롭게 주제를 정하고 기획을 하였으며 신나게 놀았다.
          </HomeTextDescription>
          <HomeTextBtn className="homeText__btn">
            <HomeTextBtnLeft className="homeText__btn--left">
              참여하기
            </HomeTextBtnLeft>
            <HomeTextBtnRight className="homeText__btn--right">
              more
            </HomeTextBtnRight>
          </HomeTextBtn>
        </HomeText>
        <HomeSwiper className="homeSwiper">
          <HomeSwiperFrame className="homeSwiper__frame" />
          <Carousel
            showThumbs={false}
            autoPlay={true as boolean}
            interval={2000}
            infiniteLoop={true as boolean}
            renderArrowPrev={(onClickHandler, hasPrev) => {
              if (hasPrev) {
                return (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title="<"
                    style={{
                      width: '2rem',
                      height: '2rem',
                      position: 'absolute',
                      top: '50%',
                      left: '0.2rem',
                      zIndex: 2,
                      transform: 'translateY(-50%)',
                      background: 'transparent',
                      border: '1px solid white',
                      borderRadius: '50%',
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    &lt;
                  </button>
                );
              }
              return null;
            }}
            renderArrowNext={(onClickHandler, hasNext) => {
              if (hasNext) {
                return (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title=">"
                    style={{
                      width: '2rem',
                      height: '2rem',
                      position: 'absolute',
                      top: '50%',
                      right: '.2rem',
                      zIndex: 2,
                      transform: 'translateY(-50%)',
                      background: 'transparent',
                      border: '1px solid white',
                      borderRadius: '50%',
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    &gt;
                  </button>
                );
              }
              return null;
            }}
          >
            <div>
              <img
                src={slide1}
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                src={slide2}
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                src={slide3}
                alt="Slide 3"
              />
            </div>
          </Carousel>
        </HomeSwiper>{' '}
      </HomeInner>{' '}
    </HomeWrapper>
  );
};
export default HomePage;
