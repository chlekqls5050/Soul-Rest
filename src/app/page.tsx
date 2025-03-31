"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import gsap from "gsap";

export default function Home() {  
  const [currentIndex, setCurrentIndex] = useState(1);


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
          <div className={`content_box content3_box`}>
            <div className="title_wrap">
              <h3>SECTION 02.</h3>
            </div>
            <div className="music_recommend_wrap position_middle">
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
        </div>
      </section>
      
      <div className="navigation_wrap">
        <button onClick={prevSlide} className="prev_btn" disabled={currentIndex <= 1}>prev</button>
        <button onClick={nextSlide} className="next_btn">next</button>
      </div>
    </div>
  );
}