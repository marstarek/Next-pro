import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper";
// import "./styles.css";
import "swiper/css";
// import "swiper/css/navigation";
import { useState } from "react";

const slides = [
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1081",
    "https://picsum.photos/1920/1082",
    "https://picsum.photos/1920/1083",
    "https://picsum.photos/1920/1084",
];

export default function Projects() {
    const [imagesNavSlider, setImagesNavSlider] = useState(null);
    return (
        <div className="px-8">
            <h1 className="mx-auto text-center text-8xl font-bold py-8">Projects</h1>

            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center">
                    <div className='p-5'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut  eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>


                </div>
                <div className="divider lg:divider-horizontal"></div>

                <div className=" grid flex-grow  card bg-base-300 rounded-box place-items-center px-5">
                    <div className=" gap-x-10  px-18 py-20 grid	sm:grid-cols-1 md:grid-cols-2   lg:grid-cols-3 space-y-2 lg:grid  lg:gap-3 lg:space-y-0">
                        <div className="h-[60rem] gap-y-20	 carousel carousel-vertical rounded-box">
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                        </div>
                        <div className="h-[60rem] gap-y-20	 carousel carousel-vertical rounded-box">
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                        </div>
                        <div className="h-[60rem] gap-y-20	 carousel carousel-vertical rounded-box">
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                            <div className="carousel-item ">
                                <img className='rounded-lg' src="https://placeimg.com/256/400/arch" />
                            </div>
                        </div>

                    </div>



                </div>

            </div>








        </div>
    );
}
