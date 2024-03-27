"use client"
import React, { useState } from 'react'
import baseball from '../assets/baseball.png'
import baseball2 from '../assets/baseball2.png'
import icehockey from '../assets/icehockey.png'
import dicks from '../assets/dicks.png'
import { StaticImageData } from 'next/image'

interface cardType {
    imageUrl: StaticImageData,
    heading: string,
    totalEvents: number,
    sport: string
}
function Sports() {

    let cardContent: cardType[] = [
        {
            imageUrl: baseball,
            heading: "Sacramento River Cats",
            totalEvents: 48,
            sport: "Baseball"
        },
        {
            imageUrl: baseball2,
            heading: "Las Vegas Aviators",
            totalEvents: 28,
            sport: "Baseball"
        },
        {
            imageUrl: icehockey,
            heading: "New Jersey Devils",
            totalEvents: 15,
            sport: "Ice Hockey"
        },
        {
            imageUrl: baseball2,
            heading: "Las Vegas Aviators",
            totalEvents: 28,
            sport: "Baseball"
        }
    ]
    return (
        <div className='relative'>
            <div className='text-2xl leading-9 font-bold heading dark:text-white'>Sports</div>
            <div className='mt-[5px] w-[80.52px] h-0 border-2 border-[#738FFF]'></div>
            <div className='card my-[25px] justify-items-center gap-[14.09px] grid grid-cols-1 min-[560px]:grid-cols-2 min-[940px]:grid-cols-3 min-[1190px]:grid-cols-4 min-[1400px]:grid-cols-5'>
                {
                    cardContent.map((item, index) => {
                        return <div className='w-[238.53px] h-[511px] shadow-[0_8px_16px_0_rgba(0,0,0,0.05)] py-[10px] px-[10.06px] dark:bg-[#3B3E47] dark:text-white' key={index}>
                            <img className='h-[385px] w-[387.48px]' src={item.imageUrl.src} />
                            <div className='mt-[12px] Inter font-[500] text-[17px] leading-[20.57px]'>{item.heading}</div>
                            <div className='w-[218.4px] h-[54px] mt-3 flex items-center gap-[32px] px-[10.06px] py-2 bg-[#F7F7F8] dark:bg-[#292B32]'>
                                <div className='flex flex-col gap-[12px]'>
                                    <div className='Inter font-normal text-[12px] leading-[14.52px] text-[#525965] dark:text-[#DFDFDF]'>Total Events</div>
                                    <div className='Inter font-[500] text-[14px] leading-[16.94px]'>{item.totalEvents} Events</div>
                                </div>
                                <div className='flex flex-col gap-[12px]'>
                                    <div className='Inter font-normal text-[12px] leading-[14.52px] text-[#525965] dark:text-[#DFDFDF]'>Sport</div>
                                    <div className='Inter font-[500] text-[14px] leading-[16.94px]'>{item.sport}</div>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div className='dark:bg-[#3B3E47] w-[238.53px] h-[511px] shadow-[0_8px_16px_0_rgba(0,0,0,0.05)] flex items-center justify-center'>
                    <div className='border-[0.2px] border-[#006555] h-[491px] w-[218.4px] relative'>
                        <img src={dicks.src} className='w-full h-[218px]' />
                        <div className='absolute h-[25px] w-[48.09px] right-0 top-0 bg-black flex items-center justify-center'>
                            <div className='text-white Inter font-bold text-[12.8px] leading-[19px]'>Ad</div>
                        </div>
                        <div className='px-[15.1px] gap-2 flex flex-col'>
                            <div className='Inter font-semibold text-[20px] leading-[24.2px] mt-7 text-center dark:text-white'>Advertisement Title</div>
                            <div className='Inter font-[400] text-[12.8px] leading-[19px] text-[#525965] dark:text-[#DFDFDF]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi qui hic tempore magni odio nostrum accusantium repellat. Asperiores quidem ab laboriosam unde laudantium est dolore, culpa ducimus nobis earum fuga blanditiis!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[50px] flex justify-center'>
                <div className='w-[124.8px] h-[46px] rounded-[3px] bg-[#2C9CF0] flex items-center justify-center hover:bg-[#4577c7]'>
                    <div className='text-white text-[14px] Inter font-[600] leading-[25.89px]'>See More</div>
                </div>
            </div>
        </div>
    )
}

export default Sports