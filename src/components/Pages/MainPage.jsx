import {Footer, Header, ProductCard, Slider} from "@/components";
import img1 from "@/assets/picture/slides/img_1.png"
import img2 from "@/assets/picture/slides/img_2.png"

const SlidesData = [
    {img: img1, link: "auth"},
    {img: img2, link: "auth"}
]
export const MainPage = () => {
    return (
        <>
            <Slider data={SlidesData}>
                <Header/>
            </Slider>
            <div className="p-5 mt-5 flex flex-wrap md:flex-nowrap gap-2 w-full">
                    <ProductCard img="http://localhost:3002/files/img_14.png"/>
                    <ProductCard img="http://localhost:3002/files/img_2.png"/>
                    <ProductCard img="http://localhost:3002/files/img_4.png"/>
            </div>
            <Footer/>
        </>
    )
}