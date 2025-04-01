"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import gsap from "gsap";

export default function Home() {  
  const [currentIndex, setCurrentIndex] = useState(1);
  const timeSteps = [4, 7, 3]; // 각 단계별 시간
  const [stepIndex, setStepIndex] = useState(0); // 현재 단계 인덱스
  const [timeLeft, setTimeLeft] = useState(timeSteps[0]); // 현재 단계 남은 시간

  useEffect(() => {
    if (timeLeft === 0) {
      if (stepIndex < timeSteps.length - 1) {
        setStepIndex(stepIndex + 1); // 다음 섹션으로 이동
        setTimeLeft(timeSteps[stepIndex + 1]); // 다음 섹션의 시간 설정
      }
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, stepIndex]);


  const nextSlide = () => {
    setCurrentIndex((prev) => {
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      return prev - 1;
    });
  };


  return (
    <div className="main_container">
      <section className="section">
        <div className="w-1280 h-100">
          {/* ${currentIndex === 1 ? "show-content" : "hide-content"} */}
          <div className={`content_box content1_box hide-content`}>
            <div className="main_title_wrap">
              <h2>MIND <br className="visible768" />COMMA,</h2>
            </div>
            <div className="text_wrap">
              <p>
                당신의 마음을 다독여 줄 공간 <br />
                소리, 색, 움직임이 조화롭게 어우러진 곳. <br />
                지친 하루의 끝에서, 당신에게 편안한 쉼을 선물합니다.
              </p>
            </div>
            <div className="ani_wrap">
              <span className="main_ill"></span>
              <span className="sub_ill sub_ill1"></span>
              <span className="sub_ill sub_ill2"></span>
            </div>
          </div>
          <div className={`content_box content2_box hide-content`}>
            <div className="title_wrap">
              <h3>SECTION 01.</h3>
            </div>
            <div className="mood_wrap position_middle">
              <ul>
                <li>
                  <button>
                    <span>
                      <Image src={'/images/icon/icon_joy.png'} fill alt="기쁨" />
                    </span>
                    <p>기쁨</p>
                  </button>
                </li>
                <li>
                  <button>
                    <span>
                      <Image src={'/images/icon/icon_anger.png'} fill alt="화남" />
                    </span>
                    <p>화남</p>
                  </button>
                </li>
                <li>
                  <button>
                    <span>
                      <Image src={'/images/icon/icon_excitement.png'} fill alt="설렘" />
                    </span>
                    <p>설렘</p>
                  </button>
                </li>
                <li>
                  <button>
                    <span>
                      <Image src={'/images/icon/icon_sadness.png'} fill alt="슬픔" />
                    </span>
                    <p>슬픔</p>
                  </button>
                </li>
                <li>
                  <button>
                    <span>
                      <Image src={'/images/icon/icon_worry.png'} fill alt="고민" />
                    </span>
                    <p>고민</p>
                  </button>
                </li>
              </ul>
            </div>
            <div className="bottom_text_wrap">
              <p>현재 기분을 선택해 주세요.</p>
            </div>
          </div>
          <div className={`content_box content3_box hide-content`}>
            <div className="title_wrap">
              <h3>SECTION 02.</h3>
            </div>
            <div className="recommend_wrap position_middle">
              <ul>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/music_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">Dangerous</p>  
                      <p className="name">infinite</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/music_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">Dangerous</p>  
                      <p className="name">infinite</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/music_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">Dangerous</p>  
                      <p className="name">infinite</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/music_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">Dangerous</p>  
                      <p className="name">infinite</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/music_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">Dangerous</p>  
                      <p className="name">infinite</p>  
                    </div>                
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bottom_text_wrap">
              <p>현재 기분에 어울리는 노래를 들어보세요.</p>
            </div>
          </div>
          <div className={`content_box content4_box hide-content`}>
            <div className="title_wrap">
              <h3>SECTION 02.</h3>
            </div>
            <div className="recommend_wrap position_middle">
              <ul>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/movie_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">캡틴 아메리카: 브레이브 뉴 월드</p>    
                      <p className="info">2025년 ‧ 액션/SF</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/movie_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">캡틴 아메리카: 브레이브 뉴 월드</p>   
                      <p className="info">2025년 ‧ 액션/SF</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/movie_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">캡틴 아메리카: 브레이브 뉴 월드</p>   
                      <p className="info">2025년 ‧ 액션/SF</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/movie_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">캡틴 아메리카: 브레이브 뉴 월드</p>   
                      <p className="info">2025년 ‧ 액션/SF</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/movie_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">캡틴 아메리카: 브레이브 뉴 월드</p>    
                      <p className="info">2025년 ‧ 액션/SF</p>  
                    </div>                
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bottom_text_wrap">
              <p>현재 기분에 어울리는 영화를 시청해 보세요.</p>
            </div>
          </div>
          <div className={`content_box content5_box hide-content`}>
            <div className="title_wrap">
              <h3>SECTION 02.</h3>
            </div>
            <div className="recommend_wrap position_middle">
              <ul>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/book_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">모순</p>    
                      <p className="name">양귀자 저자(글)</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/book_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">모순</p>    
                      <p className="name">양귀자 저자(글)</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/book_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">모순</p>    
                      <p className="name">양귀자 저자(글)</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/book_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">모순</p>    
                      <p className="name">양귀자 저자(글)</p>  
                    </div>                
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <div className="img_wrap">
                      <Image src={'/images/book_thumbnail.jpg'} fill alt="" />
                    </div>       
                    <div className="text_wrap">
                      <p className="title">모순</p>    
                      <p className="name">양귀자 저자(글)</p>  
                    </div>                
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bottom_text_wrap">
              <p>현재 기분에 어울리는 책을 읽어 보세요.</p>
            </div>
          </div>
          <div className={`content_box content6_box hide-content`}>
            <div className="title_wrap">
              <h3>SECTION 03.</h3>
            </div>
            <div className="main_page_wrap position_middle">
              <div className="img_wrap">
                <Image src={'/images/icon/icon_section03.png'} fill alt="" />
              </div>       
            </div>
            <div className="bottom_text_wrap">
              <p>긴장이 풀리고, 마음이 안정될 때까지 천천히 호흡에 집중해 보세요.</p>
            </div>
          </div>
          <div className={`content_box content7_box`}>
            <div className="title_wrap">
              <h3>SECTION 03.</h3>
            </div>
            <div className="timer_wrap position_middle">
              <ul>
                <li>
                  <div className="timer">
                    <div className="timer_progress">
                      <svg viewBox="0 0 60 60" className="svg">
                        <circle r="30" cx="30" cy="30" className="border"></circle>
                        <circle r="30" cx="30" cy="30" className="progress"></circle>
                      </svg>
                    </div>
                    <div className="seconds">{timeLeft}<span>s</span></div>
                  </div>
                  <div className="timer_text_wrap">
                    <p>코로 4초 동안 깊게 숨을 들이마십니다.</p>
                  </div>    
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <div className="navigation_wrap">
        <button onClick={prevSlide} className="prev_btn" disabled={currentIndex <= 1}>prev</button>
        <button onClick={nextSlide} className="next_btn">next</button>
      </div>
    </div>
  );
}