import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slides from "react-slick"
import {ProductCard} from "@/components";

export function ProductSlider({products}) {
    let settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
    };
    let phoneSettings = {...settings, slidesToShow: 1, slidesToScroll: 1}
    const slides = products.map((item) => {
        return (
            <div className="slide p-2 text-right dir-rtl">
                <ProductCard {...item}/>
            </div>
        )
    })
    return (
        <div className="p-2">
            <div className="hidden md:block">
                <Slides {...settings}>
                    {...slides}
                </Slides>
            </div>
            <div className="md:hidden">
                <Slides {...phoneSettings}>
                    {...slides}
                </Slides>
            </div>
        </div>
    );
}