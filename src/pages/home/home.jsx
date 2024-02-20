import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import "./home.css"
import Banner1 from "../../assets/Layer 1 copy 2.png"
import Banner2 from "../../assets/Layer 1 copy 3.png"
import Banner3 from "../../assets/banner3.png"
import Hotel from "../../assets/hotel.png"
import Hospital from "../../assets/hospital.png"
import {Link} from "react-router-dom"
export default function Carousel(){
  return (
    <React.Fragment>
        
    <div className="container">
        <>
      <TECarousel
        showControls
        showIndicators
        crossfade
        ride="carousel"
        prevBtnIcon={
            <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </>
        }
        nextBtnIcon={
            <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </>
        }
        theme={{
            indicator:
            "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        }}
        >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
            <img
              src={Banner1}
              className="block w-full"
              alt="..."
              />
            
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
            <img
              src={Banner2}
              className="block w-full"
              alt="..."
              />
            
          </TECarouselItem>
          {/* <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
              className="block w-full"
              alt="..."
              />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </TECarouselItem> */}
        </div>
      </TECarousel>
    </>
    </div>
    <section className="category container" style={{display: "flex", justifyContent: "center", marginTop: "20px", }}>
    <div class="card-category">
  <div class="icon">
    <img src={Hotel} alt="" style={{width: "60px"}} />
  </div>
  <p class="title">هتل</p>
  <p class="text">سرویس هتل</p>
</div>
    <div class="card-category">
  <div class="icon" style={{display: "flex", justifyContent: "center"}}>
    <img src={Hospital} alt=""  style={{width: "60px"}}/>
  </div>
  <p class="title">بیمارستان</p>
  <p class="text">Lorem, ipsum.</p>
</div>
    </section>
    <section className="title container">
        <h2 className="p-3">مکان های دیدنی</h2>
        <Link to="/table">
          <img src={Banner3} alt="not found" />
        </Link>
    </section>
              </React.Fragment>
  );
}