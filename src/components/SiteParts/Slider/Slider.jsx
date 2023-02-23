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
    };
    const slides = data.map((item) => {
        return (
            <div className="relative slide">
                <div className="absolute w-full">{children}</div>
                <img src={item.img} className="object-cover"/>
            </div>
        )
    })
    return (
        <Slides {...settings}>
            {...slides}
        </Slides>
    );
}