/* eslint-disable jsx-a11y/img-redundant-alt */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import details from "../Assets/details.svg";
import growth from "../Assets/growth.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CarouselElement = ({data}) => {
    return (
        <div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                // customLeftArrow={<MdKeyboardArrowLeft />}
                // customRightArrow={<MdKeyboardArrowRight />}
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite = {false}
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
                        items: 2,
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
                        items: 1,
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
                    data.map((item) => (
                        <div key={item.id} className={`flex gap-4 ${(item.id % 2 === 0) ? "bg-[#EBF9F4]" : "bg-[#E8F4FD]"} rounded-lg p-4 mr-4`}>
                            <div className='w-[140%] sm:w-[80%] h-full'>
                                <img src={item.id % 2 === 0 ? growth : details} alt="image" className='w-full h-full' />
                            </div>
                            <div>
                                <h2 className='font-semibold'>
                                    {
                                        item.heading
                                    }
                                </h2>
                                <p>
                                    {
                                        item.description
                                    }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default CarouselElement;