import React from 'react'
import arrow from '../assets/Vector.png'
import { StaticImageData } from 'next/image'
import ticket1 from '../assets/ticket1.png'
import ticket2 from '../assets/ticket2.png'

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
        }
    ]
    return (
        <div className='dark:bg-gradient-to-b from-[#18282A] to-[#221A2C] w-full h-[918px] mt-[35px] pt-[70px] pb-[50px] flex justify-center'>
            <div className='w-[1085.75px] h-full'>
                <div className='heading font-bold text-[50px] dark:text-white text-center leading-[52.5px]'>Collection Spotlight</div>
                <div className='mt-[25px] mx-[161px] px-4 dark:text-white Inter font-[400] text-[14px] leading-[22.65px] text-center'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</div>
                <div className='mt-[51px] w-full flex items-center justify-between'>
                    <div className='h-[49px] w-[36.75px] border-[#2C9CF0] border-[1px] flex items-center justify-center'>
                        <img src={arrow.src} />
                    </div>
                    <div className='flex justify-between gap-[43px]'>
                        {tickets.map((item, index2) => {
                            return <div className='w-[257px] h-[624px] dark:bg-[#3B3E47] shadow-[0_10px_20px_0_#00000033] flex pt-[15.92px] px-[15.5px] py-[15px] pb-[10.17px]' key={index2}>
                                <div className='flex flex-col'>
                                    <img src={item.imageUrl.src} className='h-[401.25px]' />
                                    <div className='mx-[7.5px] my-[20px] border-t-[0.96px] border-[#818A97] border-dashed border-'></div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='h-[49px] w-[36.75px] border-[#2C9CF0] border-[1px] flex items-center justify-center'>
                        <img src={arrow.src} className='rotate-180' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection