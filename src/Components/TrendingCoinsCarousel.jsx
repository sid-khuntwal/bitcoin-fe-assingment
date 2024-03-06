import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import axios from 'axios';
const API = "https://api.coingecko.com/api/v3/search/trending";

const TrendingCoinsCarousel = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async() => {
        setLoading(true);
        const response = await axios.get(API);

        console.log(response);

        setData(response?.data?.coins);

        console.log(data);

        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading || data === null) {

        console.log("Here");

        return (
            <div className="flex items-center justify-center w-[100vw] h-[100vh]">
                Laoding ...
            </div>
        )
    }

    console.log(data);

    return (
        <div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                // customLeftArrow={<MdKeyboardArrowLeft />}
                // customRightArrow={<MdKeyboardArrowRight />}
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {
                    data?.map((coinsData) => (
                        <div key={coinsData?.item?.id} className='flex flex-col gap-2 border border-[#E3E3E3] rounded-lg mr-2 px-6 py-4'>
                            {/* Details Div */}
                            <div className='flex gap-2 items-center'>
                                <div className='w-[2vw]'>
                                    <img src={coinsData?.item?.thumb} alt="coindImage" />
                                </div>
                                <p className='text-[#202020]'>
                                    {coinsData?.item?.symbol}
                                </p>
                                <div className={`${ Math.round(coinsData?.item?.data?.price_change_percentage_24h.usd * 100)/100 < 0 ? "bg-[#EE68551A] text-[#E96975]" : "bg-[#EBF9F4] text-[#14B079]"} flex items-center gap-2 px-2 py-1 rounded-md`}>
                                    <p>
                                        {
                                            Math.round(coinsData?.item?.data?.price_change_percentage_24h.usd * 100)/100
                                        }%
                                    </p> 
                                </div>   
                            </div>

                            {/* Price Div */}
                            <div>
                                {coinsData?.item?.data?.price}
                            </div>

                            {/* Graph Div */}
                            <div>
                                <img src={coinsData?.item?.data?.sparkline} alt="graph" />
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default TrendingCoinsCarousel;