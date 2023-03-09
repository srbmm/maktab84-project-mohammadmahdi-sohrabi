import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slides from "react-slick"
import "./Slider.css"

export function Slider({children, data}) {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    };
    const slides = data.map((item) => {
        return (
            <div className="slide">
                <img src={item.img} className="object-cover"/>
            </div>
        )
    })
    return (
        <div className="relative">
            <div className="absolute w-full z-10">{children}</div>
            <div className="md">
                <Slides {...settings}>
                    {...slides}
                </Slides>
            </div>
        </div>
    );
}