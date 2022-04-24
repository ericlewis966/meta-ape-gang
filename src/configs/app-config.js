import { FractionImage } from "constants/image-constant";

const { ArrowLeft, ArrowRight } = FractionImage;

export const PUBLIC_PATH = "/p";
export const APP_PATH = "/app";


export const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <img src={ArrowRight} alt="slider-next" />,
    prevArrow: <img src={ArrowLeft} alt="slider-next" />,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}