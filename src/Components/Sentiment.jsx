import React from "react";
import iTabImage from "../Assets/iTab.svg";
import CarouselElement from "./CarouselElement";
import { sentimentCarouselData } from "../Data/SentimentCarousel";

const Sentiment = () => {
    return(
        <div className=" bg-white p-6 rounded-lg flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">
                Sentiment
            </h1>
            <div className="flex gap-2 items-center">
                <p className="text-[#44475B] font-semibold text-2xl">
                    Key Events
                </p>
                <div className="">
                    <img src={iTabImage} alt="details Icon" />
                </div>
            </div>
            {/* Carousel Div */}
            <div>
                <CarouselElement data={sentimentCarouselData}/>
            </div>

            {/* Extimates */}
            <div className="flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                    <p className="text-[#44475B] font-semibold text-2xl">
                        Analyst Estimates
                    </p>
                    <div className="">
                        <img src={iTabImage} alt="details Icon" />
                    </div>
                </div>
                {/* Percentage Div */}
                <div className=" flex gap-14 items-center">
                    <div className="w-[50vw] flex items-center justify-center lg:w-[10vw] h-[20vh] bg-[#EBF9F4] text-xl text-[#0FBA83] lg:text-3xl font-semibold rounded-full">
                        76%
                    </div>
                    <div className="flex flex-col gap-3">
                        {/* Buy */}
                        <div className="flex gap-8 items-center w-[90%]">
                            <p className="text-[#7C7E8C] text-sm  lg:text-xl">
                                Buy
                            </p>
                            <div className="w-[30vw] bg-[#00B386] h-2 rounded-sm"></div>
                            <p className="text-[#7C7E8C] text-sm  lg:text-Xl">
                                76%
                            </p>
                        </div>
                        {/* Hold */}
                        <div  className="flex gap-6 items-center w-[90%]">
                            <p className="text-[#7C7E8C] text-sm  lg:text-xl">
                                Hold
                            </p>
                            <div className="w-[3vw] bg-[#C7C8CE] h-2 rounded-sm"></div>
                            <p className="text-[#7C7E8C] text-sm  lg:text-Xl">
                                8%
                            </p>
                        </div>
                        {/* Sell */}
                        <div className="flex gap-8 items-center w-[90%]">
                            <p className="text-[#7C7E8C] text-sm  lg:text-xl">
                                Sell
                            </p>
                            <div className="w-[7vw] bg-[#F7324C] h-2 rounded-sm"></div>
                            <p className="text-[#7C7E8C] text-sm  lg:text-Xl">
                                16%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sentiment;