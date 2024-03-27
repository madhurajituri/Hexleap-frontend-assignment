"use client";
import React, { useRef } from 'react'
import arrow from '../assets/Vector.png'
import { StaticImageData } from 'next/image'
import ticket1 from '../assets/ticket1.png'
import ticket2 from '../assets/ticket2.png'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ticketType {
    imageUrl: StaticImageData,
    name: string,
    date: string,
    day: string,
    time: string,
    address: string,
    collection: string
}
function Collection() {
    const swiperRef = useRef(null);
    const swiper = useSwiper();

    let tickets: ticketType[] = [
        {
            imageUrl: ticket1,
            name: "Las Vegas Aviators",
            date: "OCT 15",
            day: "SUN",
            time: "4.30 PM",
            address: "Las Vegas Ballpark, Las Vegas, Nevada",
            collection: "Take Flight Collection"
        },
        {
            imageUrl: ticket2,
            name: "Sacramento River Cats",
            date: "OCT 15",
            day: "SUN",
            time: "4.30 PM",
            address: "Sutter Health Park, Sacramento, California",
            collection: "Orange Collection"
        },
        {
            imageUrl: ticket1,
            name: "Las Vegas Aviators",
            date: "OCT 15",
            day: "SUN",
            time: "4.30 PM",
            address: "Las Vegas Ballpark, Las Vegas, Nevada",
            collection: "Take Flight Collection"
        },
        {
            imageUrl: ticket1,
            name: "Las Vegas Aviators",
            date: "OCT 15",
            day: "SUN",
            time: "4.30 PM",
            address: "Las Vegas Ballpark, Las Vegas, Nevada",
            collection: "Take Flight Collection"
        }
    ]
    return (
        <div className='dark:bg-gradient-to-b from-[#18282A] to-[#221A2C] w-full h-[918px] mt-[35px] pt-[70px] pb-[50px] flex justify-center'>
            <div className='w-[1085.75px] h-full'>
                <div className='heading font-bold text-[50px] dark:text-white text-center leading-[52.5px]'>Collection Spotlight</div>
                <div className='mt-[25px] mx-[161px] px-4 dark:text-white Inter font-[400] text-[14px] leading-[22.65px] text-center'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</div>
                
                <div className='gap-[81.25px] flex justify-center items-center'>
                    <div onClick={swiperRef.current?.swiper.slidePrev()} className="h-[49px] w-[36.75px] border-[#2C9CF0] border-[1px] flex items-center justify-center text-[20px] hover:bg-white"><img src={arrow.src} /></div>
                    <div className='flex justify-center'>

                        <div className='mt-[51px] w-[850px] relative'>
                            <Swiper modules={[Navigation]}
                                spaceBetween={43}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1000: { slidesPerView: 3 }
                                }}
                                loop={true}
                                ref={swiperRef}
                            >

                                {tickets.map((item, index2) => {
                                    return <SwiperSlide key={index2}>
                                        <div className='w-[257px] h-[624px] dark:bg-[#3B3E47] shadow-[0_10px_20px_0_#00000033] flex pt-[15.92px] px-[15.5px] py-[15px] pb-[10.17px]'>
                                            <div className='flex flex-col items-center'>
                                                <img src={item.imageUrl.src} className='h-[401.25px]' />
                                                <div className='relative px-[7.5px] my-[16px] w-[211px] border-t-[0.96px] border-[#818A97] border-dashed'>
                                                    <div className='w-5 h-5 rounded-full absolute -left-8 -top-2 bg-[#221A2C]'></div>
                                                    <div className='w-5 h-5 rounded-full absolute -right-8 -top-2 bg-[#221A2C]'></div>
                                                </div>
                                                <div className='text-center dark:text-white'>
                                                    <div className='heading font-[500] leading-[26.52px] text-[17px]'>{item.name}</div>
                                                    <div className='heading mt-[10px] text-[14px] tracking-tight justify-center text-[#DFDFDF]'>
                                                        <div>{item.date} | {item.day} | {item.time}</div>
                                                    </div>
                                                    <div className='mt-[14px] Inter font-[400] leading-[20.58px] text-[14px] text-[#525965] dark:text-[#DFDFDF]'>{item.address}</div>
                                                </div>
                                                <div className='mt-[16px] bg-black w-[213px] h-[36px] items-center justify-center flex hover:bg-zinc-900'>
                                                    <div className='Inter font-[500] text-[12.73px] leading-[15.41px] text-white'>{item.collection}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })}
                            </Swiper>
                        </div>
                    </div>
                    <div onClick={swiperRef.current?.swiper.slideNext()} className=" h-[49px] w-[36.75px] border-[#2C9CF0] border-[1px] flex items-center justify-center text-[20px] hover:bg-white"><img src={arrow.src} className='rotate-180' /></div>
                </div>

            </div>
        </div>
    )
}

export default Collection